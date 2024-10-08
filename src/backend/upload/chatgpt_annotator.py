from .serializables import Corpus, Paragraph, Token
from .annotator import Annotator, TOKEN_UNKNOWN

import openai
import tiktoken
import dotenv
import warnings

import os
from typing import List, Tuple, Dict
import re

dotenv.load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# https://platform.openai.com/docs/guides/gpt/chat-completions-api
# https://platform.openai.com/docs/api-reference/chat/create
# https://platform.openai.com/docs/guides/gpt-best-practices/strategy-write-clear-instructions

#TODO: This follows the PoC, which can be improved.

GLOSS_DELIMITER = "||"
TOKEN_TO_REANNOTATE = "!TO_REANNOTATE" #local
TOKEN_TO_IGNORE = "!TOKEN_TO_IGNORE" #those not to be processed

class ChatgptGlossFetcherException(RuntimeError):
	pass
class IncompleteResultException(ChatgptGlossFetcherException):
	pass
class OriginalTokenNotInResException(ChatgptGlossFetcherException):
	pass
class UnidentifiableTokenInResException(ChatgptGlossFetcherException):
	pass
class IncompleteGlossesPerTokenException(ChatgptGlossFetcherException):
	pass
class CannotRetryMoreException(ChatgptGlossFetcherException):
	pass
class CannotParseException(ChatgptGlossFetcherException):
	pass
class InitialLineNotFoundException(ChatgptGlossFetcherException):
	pass
class NumberNotMatchingException(ChatgptGlossFetcherException):
	pass

def filter_alphabets(string):
	return re.sub(r'[^a-zA-Z]', '', string)

#Returns True if they share the half of the alphabets
def loose_comparison(orig_txt, ret_txt):
	filtered_orig = filter_alphabets(orig_txt)
	filtered_ret = filter_alphabets(ret_txt)

	if not filtered_orig:
		return True

	set_orig = set(filtered_orig)
	set_ret = set(filtered_ret)
	
	intersection = set_orig & set_ret
	union = set_orig | set_ret
	
	ratio = len(intersection) / len(union) if len(union) > 0 else 0
	
	return ratio >= 0.5

#Following PoC.
class ChatgptAnnotator(Annotator):
	def __init__(self, annotator_name, token_usage_callback): #, user_openai_api_key=None):
		self.annotator_name = annotator_name
		use_pretrained_model = "pretrained" in annotator_name
		self.gloss_fetcher = ChatgptGlossFetcher(use_pretrained_model=use_pretrained_model, model=annotator_name, token_usage_callback=token_usage_callback)

	def put_gloss(self, p: Paragraph):
		#First get the token strings. This ignores the delimiters like newlines, which may be negative for the performance. (TODO: check)
		tokens_wo_delimiters = [t for t in p.tokens if not t.is_delimiter]
		token_strs = [t.txt for t in tokens_wo_delimiters]
		
		#Since the Chatgpt has a length limit, chuckize it
		chunks = self.chunckize(token_strs)
		print(f"Chunks: {chunks}")

		glosses = []
		previ = -1
		for endi in chunks:
			the_len = endi-previ
			if the_len <= 0:
				print("warning: the_len <= 0)")
				previ = endi
				continue
			print(f"[{previ+1}:{endi+1}] out of {len(token_strs)} (len: {the_len})")
			chunk_strs = token_strs[previ+1:endi+1]
			chunk_glosses = self.gloss_fetcher.try_fetch_gloss(chunk_strs)
			glosses += chunk_glosses

			previ = endi
			print(f"Chunk: {chunk_glosses} (len: {len(chunk_glosses)})")
	
		for token, gloss in zip(tokens_wo_delimiters, glosses):
			token.gloss = gloss

		p.annotator_info = f"ChatGptAnnotator_`{self.lang_from}`_`{self.lang_to}`"

	def reput_gloss(self, p: Paragraph, target_tokens: List[int]):
		# R: Initially taking the `put_gloss` as a backbone... TODO: generalize these

		print("reput_gloss: target_tokens:", target_tokens)

		tokens_wo_delimiters = []
		#token_strs = []
		reannotate_bools = [] #[(str, bool), ...]
		target_token_idxs = [] #Not counting the delimiters
		i_not_delimiter = 0
		for i, t in enumerate(p.tokens):
			if t.is_delimiter:
				continue

			tokens_wo_delimiters.append(t)
			#token_strs.append(t.txt)

			should_be_reannotated = i in target_tokens
			reannotate_bools.append(should_be_reannotated)
			if should_be_reannotated:
				t.gloss = TOKEN_TO_REANNOTATE
				target_token_idxs.append(i_not_delimiter)

			i_not_delimiter += 1
		
		#Since the Chatgpt has a length limit, chuckize it
		# R: target-centered chunking
		chunks_for_reannotation = self.chunckize_for_reannotation(reannotate_bools)
		# R: ret.s [(p0, e0), ...] for [p0+1:e0+1], ... (to match above)
		print(f"Chunks_for_reannotation: {chunks_for_reannotation}")

		#previ = -1
		for previ, endi in chunks_for_reannotation:
			the_len = endi-previ
			if the_len <= 0:
				print("warning: the_len <= 0")
				#previ = endi
				continue
			print(f"[{previ+1}:{endi+1}] out of {len(tokens_wo_delimiters)} (len: {the_len})")

			# R: if the target in the chunk? (TODO: now redundant, delete this code later) #TODO: it returns chucks with no token to reannotate. fix this.
			if not any([
				idx < endi+1
				for idx
				in target_token_idxs
				if previ+1 <= idx
			]):
				print("Skipping this chunk...")
				#previ = endi
				raise RuntimeError("chunckize_for_reannotation() returned invalid chunks")
				#continue

			chunk_tokens = tokens_wo_delimiters[previ+1:endi+1]
			chunk_strs = [t.txt for t in chunk_tokens]
			chunck_glosses = [t.gloss for t in chunk_tokens]
			chunk_glosses = self.gloss_fetcher.try_fetch_gloss(chunk_strs, reannotation_gloss_strs=chunck_glosses)

			#previ = endi #this is ineffective, ignore...
			print(f"Chunk: {chunk_glosses} (len: {len(chunk_glosses)})")
	
			for token, gloss in zip(chunk_tokens, chunk_glosses):
				if token.gloss != TOKEN_TO_REANNOTATE:
					continue

				if gloss == TOKEN_TO_IGNORE:
					warnings.warn(f"Token and Gloss not paired: {token}, {gloss}.\nchunck_tokens: {chunk_tokens}\nchunk_glosses: {chunk_glosses}")

				token.gloss = gloss

		#p.annotator_info = f"ChatGptAnnotator_`{self.lang_from}`_`{self.lang_to}`"

	def chunckize(self, token_strs, maxgloss=80) -> List[int]:
		#Returns the end indices

		endchars = ['.', '!', '?']
		
		#idx_w_endchars = [t for t in token_strs if any(map(lambda ch: ch in t, endchars))]
		idx_w_endchars = []
		for i, token_str in enumerate(token_strs):
			if any(map(lambda ch: ch in token_str, endchars)):
				idx_w_endchars.append(i)
		
		end_sents = [0] #End of the sentences
		while True:
			#Find x where x in (last, last+maxgloss]
			last = end_sents[-1]

			if (last + maxgloss) > len(token_strs):
				break

			idx_w_endchars = [e for e in idx_w_endchars if e > last] #Clear out the previous ones
			targets = [e for e in idx_w_endchars if e <= maxgloss]

			if targets == []:
				target = last + maxgloss
			else:
				target = max(targets)
				
			end_sents.append(target)

		end_sents = end_sents[1:]
		the_last = len(token_strs)-1
		if the_last not in end_sents:
			end_sents.append(the_last)

		return end_sents
	
	def chunckize_for_reannotation(self, reannotate_bools: List[bool], margin=16, min_margin=4) -> List[Tuple[int, int]]:
		# R: ret.s [(p0, e0), ...] for [p0+1:e0+1], ... (see reput_gloss)
		# TODO: also has to receive which ones are to be reannotated

		chunks = []

		#1. Find the first occurence of `TOKEN_TO_REANNOTATE`
		for i, should_reannotate in enumerate(reannotate_bools):
			if not should_reannotate:
				continue

			#`i` indicates the token to reannotated
			#Check if `i` is in the previous chunk
			if chunks != []:
				lastone = chunks[-1][1]
				
				#Take care of the margin; this ensures that the context is included.
				if i < lastone - min_margin:
					#Included in the last chunk; ignore this `i`
					continue

			#Else: not included, make a new chunk
			prev_i = i - margin
			if prev_i < -1:
				prev_i = -1 #The startpoint

			#Now set the end_i
			end_i = i + margin
			#...does it overflow?
			if (end_i + 1) > len(reannotate_bools): #chunk: [prev_i+1 : end_i + 1]
				#It overflowed; set the end_i to the last one
				end_i = (len(reannotate_bools) - 1)

			chunks += [(prev_i, end_i)]

		return chunks
	
class GlossFetcher:
	def __init__(self, dummy=False):
		self.dummy = dummy

	def fetch_gloss(self, token_strs: List[str]) -> List[List[str]]:
		if not self.dummy:
			raise NotImplementedError()
		
		#Dummy method
		length = len(token_strs)
		return [[f"dummy{i}"] for i in range(length)]

class ChatgptGlossFetcher(GlossFetcher):
	def __init__(self, chatgpt_gloss_options=None, use_pretrained_model=False, ignore_incomplete_res=True, max_token_ratio=3, model="gpt-4o-mini", token_usage_callback=None): #, user_openai_api_key=None):
		self.ignore_incomplete_res = ignore_incomplete_res
		self.chatgpt_ft0_model = "chatgpt_gpt-4o-mini-pretrained_0"

		#`"model"` should consist of alphanumerals and underscores.
		if model == "chatgpt_ft0":
			print("Using the pretrained model.")
			self.model = os.getenv("PRETRAINED_MODEL_" + self.chatgpt_ft0_model)
			use_pretrained_model = True
		elif use_pretrained_model:
			print("Using the pretrained model.")
			self.model = os.getenv("PRETRAINED_MODEL_" + model)
		else:
			print("Using the general model.")
			self.model = model.replace("chatgpt_", "").replace("-untrained_0", "") #TODO: ad hoc
		if not self.model:
			raise ValueError(f"Unknown model: {self.model}")
		
		#Should be done after setting self.model
		if chatgpt_gloss_options is None:
			chatgpt_gloss_options = ChatgptGlossOptions.get_default_obj(is_trained=use_pretrained_model)
		self.chatgpt_gloss_options = chatgpt_gloss_options

		#For token usage predicting
		self.model_encoding = tiktoken.encoding_for_model(self.model)
		self.max_token_ratio = max_token_ratio #Limit the token usage to (question) * this_value
		self.token_usage_callback = token_usage_callback
		
	def try_fetch_gloss(self, token_strs: List[str], outer_retry=2, inner_retry=3, reannotation_gloss_strs=None) -> List[List[str]]:
		print(f"Trying to fetch {len(token_strs)} glosses")

		reannotation = type(reannotation_gloss_strs) is list
		if reannotation:
			print("Reannotating.")
			print("reannotation_gloss_strs:", reannotation_gloss_strs)

		query = self.make_query(token_strs) if not reannotation else self.make_query_reannotation(token_strs, reannotation_gloss_strs)
		orig_messages=[
			*self.chatgpt_gloss_options.get_chat(reannotation=reannotation),
			{"role": "user", "content": query},
		]
		self.last_res_text = ""
		
		for try_i in range(outer_retry):
			print(f"-----------Try A{try_i}.")
			messages = orig_messages.copy()

			for try_j in range(inner_retry):
				print(f"----------------------Try B{try_j}.")
				try:
					return self.fetch_gloss(token_strs, messages, reannotation_gloss_strs=reannotation_gloss_strs)
				except ChatgptGlossFetcherException as exc:
					print(f"Exception: {repr(exc)}. Retrying.")
					print(f"last_res_text: {self.last_res_text}")
					messages += [
						{"role": "assistant", "content": self.last_res_text},
						{"role": "user", "content": f"""
							Got an error, probably by a malformatted result.
							``` {repr(exc)} ```
						"""},
					]

		raise CannotRetryMoreException(f"Failed after {outer_retry}*{inner_retry} retries.")
	
	def fetch_gloss(self, token_strs: List[str], messages, reannotation_gloss_strs=False) -> List[List[str]]:
		print(f"Fetching {len(token_strs)} glosses")

		max_tokens = 0
		for row in messages:
			max_tokens += len(self.model_encoding.encode(row["content"]))
		max_tokens *= self.max_token_ratio
		max_tokens = min(max_tokens, 4096)
		print(f"W/ {max_tokens} max_tokens")

		print(messages)

		response = openai.ChatCompletion.create(
			model=self.model,
			messages=messages,
			max_tokens=max_tokens,
		)

		token_usage = response["usage"]["total_tokens"]
		print("token usage:", token_usage)
		self.token_usage_callback(token_usage)

		res = response["choices"][0]["message"]["content"]
		self.last_res_text = res

		print(res)

		res = self.parse_res(res)

		#Check completeness
		if len(res) != len(token_strs):
			exc_str = f"{len(token_strs)} lines expected but got {len(res)} lines."
			if self.ignore_incomplete_res:
				#warnings.warn(exc_str)
				print(f"Warning: {exc_str}")
			else:
				raise IncompleteResultException(exc_str)

		#Check validity
		res = self.validate_res(token_strs, res, reannotation_gloss_strs=reannotation_gloss_strs)

		return res
	
	def make_query(self, token_strs: List[str]) -> str:
		q = ""
		for i, t in enumerate(token_strs):
			q += f"{i}: {t}\n"

		return q
	
	def make_query_reannotation(self, token_strs, token_glosses):
		q = ""
		for i, (txt, gloss) in enumerate(zip(token_strs, token_glosses)):
			q += f"{i}: {txt} {GLOSS_DELIMITER} {gloss}\n"

		return q
	
	def parse_res(self, res) -> Dict[str, List[str]]:
		#{orig_token: [glosses]}
		orig_res = res

		try:
			#Discard the codeblock
			if "```" in res:
				res = res.split("```")[1]
			elif "0:" not in res:
				raise InitialLineNotFoundException("The first line (`0: ...`) could not find. Reformat the reply and answer again.")
			else:
				res = res[res.find("0:"):]

			res = [line for line in res.split('\n') if line.strip() != ""] #Split lines
			res = [line.split(':', maxsplit=1) for line in res] #Parse the linenum.
			res = {
				int(line[0]): [g.strip() for g in line[1].split(GLOSS_DELIMITER) if g.strip() != ""]
				for line
				in res
			} #Parse the glosses
			if False: #Id.
				outres = {}
				for line in res:
					print("line:", line)
					line0 = line[0]
					line1 = line[1]
					val = []
					for g in line1.split(GLOSS_DELIMITER):
						if g.strip() == "": continue
						val.append(g.strip())
					outres[int(line0)] = val
				res = outres

			"""
			res = res.values() #Discard the linenums here. (Use them for debugging if needed)
			res = {
				line[0]: line[1:]
				for line
				in res
			} #Use the first element (orig token) as key
			"""
		
		except ValueError as exc:
			print(orig_res)
			raise CannotParseException("Could not parse the output. The output should be in the codeblock (``` 0: ... ```) and additional notes are not needed.")
		
		return res
	
	def validate_res(self, token_strs, res: Dict[int, List[str]], reannotation_gloss_strs=False) -> List[List[str]]:
		reannotation = type(reannotation_gloss_strs) is list

		print("token_strs:", token_strs)
		print("res:", res)
		for i, (orig_txt, (ret_i, res_value)) in enumerate(zip(token_strs, res.items())):
			if not reannotation and i != ret_i:
				raise NumberNotMatchingException(f"`{ret_i}:` line not found.")
			
			if len(res_value) <= 0:
				raise UnidentifiableTokenInResException(f"Empty line: {i}.") #Not likely.
			if len(res_value) == 1:
				#gloss not returned; just put !UNKNOWN
				res_value.append(TOKEN_UNKNOWN)
			
			[ret_txt, ret_gloss] = res_value[:2]
			print(i, ret_i, orig_txt, ret_txt, ret_gloss)

			#TODO: reannotation case
			if not reannotation and not loose_comparison(orig_txt, ret_txt):
				raise NumberNotMatchingException(f"Expected `{i}: {orig_txt} ||` but got `{i}: {ret_txt} || `. The number has to be exact. Rewrite as `{i}: {orig_txt} ||`.")
		
		#Pass 2: iter. by orig token_str
		outres = []
		if reannotation:
			#orig_gloss_strs_copy = reannotation_gloss_strs.copy()
			print(reannotation_gloss_strs)
			reannotation_indices = [i for i, e in enumerate(reannotation_gloss_strs) if e == TOKEN_TO_REANNOTATE]
			print(reannotation_indices)

			#TODO: why does this happen (likely chunking error)
			if reannotation_indices == []:
				print("TODO: reannotation_indices == []")
				return [TOKEN_TO_IGNORE for _ in range(len(token_strs))]

		for i, _ in enumerate(token_strs): #Not this `i`
			g = None

			if reannotation and i not in reannotation_indices:
				g = TOKEN_TO_IGNORE
			else:
				if i not in res:
					g = TOKEN_UNKNOWN
				else:
					g = res[i][1]

			outres.append(g)

		return outres

class ChatgptGlossOptions:
	def __init__(self, gloss_insts: List[str], example: Tuple[str, str], is_trained):
		self.gloss_insts = gloss_insts
		self.example = example
		
		self.get_chat = self.get_chat_trained if is_trained else self.get_chat_untrained

	def get_chat_trained(self, reannotation=False):
		if reannotation:
			content = f"Reannotate the input. A series of words will be given, which form a part of sentences. Some lines will have `{TOKEN_TO_REANNOTATE}` on its right side, which is to be re-annotated. Return only lines with `{TOKEN_TO_REANNOTATE}`, with {TOKEN_TO_REANNOTATE} itself replaced following the context."
		else:
			content = f"""
				Parse this corpus (Interlinear gloss). 
				{self.gloss_insts}
			"""

		return [
			{"role": "system", "content": content}
		]

	def get_chat_untrained(self, reannotation=False):
		if reannotation:
			return self.get_chat_untrained_reannotate()

		newline = '\n'
		len_tokens = len(self.example)
		return [
			{"role": "system", "content": f"""
				Parse this corpus (Interlinear gloss).

				The user will tokenize and enumerate the raw input, as:
					`Je suis.`
				to
				```
					0: Je
					1: suis.
				```

				You are to respond with 
				```
					i: original_word {GLOSS_DELIMITER} gloss
				```.
				Here, the glosses are delimited with `{GLOSS_DELIMITER}`.
				No line should be skipped. Otherwise it will raise an error.

				For example, if the gloss should be then translation to English,
				the reponse shall be:
				```
					0: Je {GLOSS_DELIMITER} I
					1: suis. {GLOSS_DELIMITER} am.
				```

				Since the output text is to be processed by other program,
				the structure of the output is important.

				The numbers should correspond to the original token.
				No line shall be omitted!
				```
					0: Je
					1: le
					2: sais.
				```
				```
					0: Je {GLOSS_DELIMITER} I
					1: le {GLOSS_DELIMITER} it
					2: sais. {GLOSS_DELIMITER} know
				```

				The output should only consist of the gloss block (```...```) and any other notes will be ignored.
			"""},
			{"role": "user", "content": f"""
				e.g. `i: "original_word {GLOSS_DELIMITER} gloss`
				Since there are {len_tokens} tokens in the input, {len_tokens} lines of output is exptected.
				i.e. the last line be `{len_tokens-1}: ...`

				`gloss` is:
				{self.gloss_insts}

				```
				{newline.join([
					f"{i}: {t[0]}"
					for i, t in
					enumerate(self.example)
				])}
				```
			"""},
			{"role": "assistant", "content": f"""
				```
				{newline.join([
					f"{i}: {t[0]} {GLOSS_DELIMITER} {t[1]}"
					for i, t in
					enumerate(self.example)
				])}
				```
			"""},
		]
	
	def get_chat_untrained_reannotate(self):
		#Does not follow the annotation args

		to_reannotates = [1, 2]
		newline = '\n'

		return [
			{"role": "system", "content": f"""
				Re-eannotate this corpus (Interlinear gloss).
	
				The user will tokenize and enumerate the raw input, as:
				```
					0: als {GLOSS_DELIMITER} as
					1: dieses {GLOSS_DELIMITER} {TOKEN_TO_REANNOTATE}
					2: Herz. {GLOSS_DELIMITER} heart.
				```
				You have to find lines with `{TOKEN_TO_REANNOTATE}` and give a new translations, as:
				```
					1: dieses {GLOSS_DELIMITER} this
				```
				Here, `{TOKEN_TO_REANNOTATE}` was replaced by your reannotation.

				The structure of the ouput is important and no line with shall be omitted.
			"""},
			{"role": "user", "content": f"""
				e.g. `i: "original_word {GLOSS_DELIMITER} gloss`
				Since there are {len(to_reannotates)} `{TOKEN_TO_REANNOTATE}` tokens in the input, {len(to_reannotates)} lines of output is exptected.
				i.e. the last line be `{to_reannotates[-1]}: ...`

				`gloss` is:
				{self.gloss_insts}

				```
				{newline.join([
					f"{i}: {t[0]} {GLOSS_DELIMITER} {t[1] if i not in to_reannotates else TOKEN_TO_REANNOTATE}"
					for i, t in
					enumerate(self.example)
				])}
				```
			"""},
			{"role": "assistant", "content": f"""
				```
				{newline.join([
					f"{i}: {t[0]} {GLOSS_DELIMITER} {t[1]}"
					for i, t in
					enumerate(self.example)
					if i in to_reannotates
				])}
				```
			"""},
		]

	@staticmethod
	def get_default_obj(is_trained):
		if is_trained:
			return ChatgptGlossOptions.get_default_trained_obj()
		else:
			return ChatgptGlossOptions.get_default_untrained_obj()

	@staticmethod
	def get_default_untrained_obj():
		return ChatgptGlossOptions(
			gloss_insts=[
				"""
				The gloss is expected to be a translation of the token.
				The grammatical elements need not be specified
				but can be naturally expressed
				(e.g. taking a genetive word as `of ...`)
				""",
			],
			example=[
				("Ceux", "Those"),
				("que", "whom"),
				("vous", "you"),
				("oubliez", "forget"),
				("ne", "not"),
				("vous", "you"),
				("oublieront", "will forget"),
				("pas", "not"),
			],
			is_trained=False,
		)
	
	@staticmethod
	def get_default_trained_obj():
		return ChatgptGlossOptions(
			gloss_insts="English translation",
			example=None,
			is_trained=True,
		)

if __name__ == "__main__":
	print("CHATGPT TEST")

	fetcher = ChatgptGlossFetcher(use_pretrained_model=False)
	res = fetcher.try_fetch_gloss(["Je", "ne", "sais", "pas."])

	print(res)