# 설계

## Frontend

### UI
![images/frontend_main_ui.png](images/frontend_main_ui.png)

## Backend

### Endpoints
e.g. `http://localhost/api/v2/annotator/annotate`

#### /api/v4
- `POST /upload`
  - Req: `"corpus"` *or* `"original_text"`*, not both*
  - Res: `"corpus_id"`

- `POST /parser/divide`
  - Req: `"corpus_id"`, `"divide_options"`
  - Res: `"task_id"`
- `POST /parser/parse`
  - Req: `"corpus_id"`, `"parse_options"`
  - Res: `"task_id"`

- `POST /annotator/annotate`
  - Req: `"corpus_id"`, `"annotate_options"`
  - Res: `"task_id"`
- `POST /annotator/reannotate`
  - Req: `"corpus_id"`, `"annotate_options"`, `"reannotate_options"`
  - Res: `"task_id"`

- `GET /tasks/`
  - Res: [`{"task_id", "status", "target_corpus_id"}`, ...]
- `GET /tasks/<id>`
  - Res: `"status"`, `"target_corpus_id"`
- `GET /tasks/<id>/abort`
  - Res: `"success": true`
  - Note: Only effective when task.status is in [`READY`, `RUNNING`]

- `GET /corpuses/<id>`
  - Res: `"corpuses_history"`
- `GET /corpuses/`
  - Res: [`{"corpus_id", "corpuses_history"}`, ...]

- `GET /user/available-openai-tokens`
  - Res: `"available-openai-tokens"`
- `GET /user/get-temp-user`
  - Res: `"success"`, `"key"`
  - Note: The session logs in. The email will end with `@example.com`.
- `GET /user/key`
  - Res: `"key"`
  - Note: `"key"` is not needed since it also uses the session.
- `GET /user/logout`

##### /rest-auth/
- See [`dj-rest-auth` Doc](https://dj-rest-auth.readthedocs.io/en/latest/api_endpoints.html)

- `POST /login/` *(that is, `/api/v4/rest-auth/login/`)*
  - Req: `"email"`, `"password"`, 
  - Res: `"key"`
  - Note: ~~`username`~~ is not required
- `POST /logout/`
- `POST /registration/`
  - Req: `"email"`, `"password1"`, `"password2` *(= `"password1`)*
  - Note: ~~`username`~~ is not required
- *etc.* (See the doc above)
- Note: For every POST endpoints, the `csrftoken` that is saved on the client-side cookie has to be included on the request header with name `X-CSRFToken`. Test the backend index page to see this behavior. (Implemented [here](https://github.com/parkchamchi/GlossySnake/blob/0a938f51be24046c3e1b26ec320d0647bafd381a/src/backend/templates/index.html#L406))

## Classes

### Serializable
![images/v4_class_serializable.png](images/v4_class_serializable.png)

- Reserved `Token.gloss`: `"!UNKNOWN"`

### Req. options
![images/class_req_options.png](images/class_req_options.png)

- For `AnnotateOptions.annotator_name`
  - `null`: defaults to `"dummy"`
  - `"dummy"`: for test purposes
  - `"chatpgt_ft0"`: uses the pretrained ChatGPT model (default fallback)
    - `"chatgpt_gpt-3.5-turbo-untrained_0"`: Using untrained
    - `"chatgpt_gpt-3.5-turbo-pretrained_0"`: Using pretrained
    - `"chatgpt_gpt-4o-mini-untrained_0"`
    - `"chatgpt_gpt-4o-mini-pretrained_0"`
- On `/annotator/reannotate`, the fields of `AnnotateOptions`:
  - `.target_paragraphs`: only the first element is used.
  - The other fields can be null can be null (will use the previous one)

### Manipulators
![images/class_manipulators.png](images/class_manipulators.png)

```python
class Parser: 
  def divide_into_paragraphs(c: Corpus, paragraph_delimiters=?: list[str], **kwargs) {
      c.p_div_locs = [p0, p1, p2, ...]
      c.paragraphs = [
          Paragraph(original_text=c.original_text[p:q], pstate="DIVIDED")
          for p, q
          in the sequence of the c.p_div_locs
      ]
  }

  def parse_paragraph(p: Paragraph, token_delimieters=?: list[char], **kwargs):
      p.tokens = [Token() ...]
      p.pstate = "PARSED"
      p.token_delimieters = token_delimiters


class Annotator:
	def annotate(p: Paragraph, lang_from: str, lang_to: str, **kwargs):
		if not p.is_delimiter:
			for token in p.tokens:
				if token.is_delimiter:
					continue
				token.gloss = ...

		p.pstate = "ANNOTATED"
		p.annotator_info = ...
```

## Seq.
![images/seq_general.png](images/seq_general.png)

- Note: The parallelistic behavior is not yet implemented.

## ER
![images/er_dj_serializables.png](images/er_dj_serializables.png)

`TaskInfo.status` is in [`READY`, `RUNNING`, `FINISHED`, `ERROR`, `ABORTED`]

## User model

- **email**
- password
### Token infos
- available_openai_tokens

## Samples
- Served in https://parkchamchi.github.io/GlossySnake/samples/v1/
- The `index.json` serves `{"filenames": [...]}`

## Deprecated

### v4
- `GET /user/check`
  - Res: `"is_auth"`, `"email"`, `"key"`
  - Note: No authentication required.
  - Not used anymore as the session auth is deprecated

- `GET /user/openai_api_key`
  - Res: `"openai_api_key"`
  - Note: can be null. (if not set)
- `PUT /user/openai_api_key`
- `DELETE /user/openai_api_key`

- `User.personal_openai_key` *(take care of this sensitive data)*

### v3
#### ER
![images/v3_er_dj_serializables.png](images/v3_er_dj_serializables.png)

### v2
#### Backend
![images/v2_class_backend.png](images/v2_class_backend.png)

```python
class Task:
	def run(self, func, data):
		self.status = "RUNNING"

		uploaded_corpus = get from self.target_corpus_id
		uploaded_corpus.current_task = task_id

		# Run the task
		func(args) 
			#newcorpus.task_ids.append(task_id)
			#uploaded_corpuzs.corpuses_history.append(newcorpus)

		#After the task is completed:
		uploaded_corpus.current_task = None
		self.status = "FINISHED"
```
- **TODO**: Change the model and seperate the array fields (in the next iteration)

### v1
#### Endpoints
- `POST /v1/glosses/annotate`
  - ![images/v1_reqjson.png](images/v1_reqjson.png)
  - Returns the "Result JSON" below

#### Result JSON

![images/v1_resjson.png](images/v1_resjson.png)

[Week 2](/docs/weekly/week2.md) 참조.

- `paragraph_delimiters`: *list of strings*: 문단을 나누는 문자열
- `paragraphs`: *list of objects*
  - `is_delimiter`: *boolean*: 문단을 나누는 문자열인지 여부 (예: newline)
  - `token_delimiters`: *string (of chars)*: 토큰을 나누는 문자들
  - `tokens`: *list of objects*
    - `txt`: *string*: 단어
	- `is_delimiter`: *boolean*: 토큰이 delimiter인지 여부
	- `gloss`: *string or null*: 번역물.
	  - `"!UNKNOWN"`: 번역물 제공 실패
	  - `"!CONTINUED"`: 이전 gloss에서 이어짐. (*예시: `["fishing", "rod"]` ~ `["낚시대", "!CONTINUED"]`*)
