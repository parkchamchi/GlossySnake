This project was to approximate the interlinear corpus for paedagogic texts. It used the LLM API calls to fetch the structured text, then displayed it on the browser. I can't read my old writings... 

*2025.10.25*

---

It's much worse than I remember -- but I edited bunch of 'em & relocate the readme here. I was kinda lost when I wrote them okay

The program as janky as it is still works

See Physica [1](/docs/pdf_outs/Physica-bk1.pdf) [2](/docs/pdf_outs/Physica-bk2.pdf) [3](/docs/pdf_outs/Physica-bk3.pdf) [4](/docs/pdf_outs/Physica-bk4.pdf) [5](/docs/pdf_outs/Physica-bk5.pdf) [6](/docs/pdf_outs/Physica-bk6.pdf) [7](/docs/pdf_outs/Physica-bk7.pdf) [8](/docs/pdf_outs/Physica-bk8.pdf)

*2026.07.20*

---

# GlossySnake: A Justification *(2024.09.21)*

## The Hamiltonian method?

The problem that arises reading in foreign language: the vocabulary -- indexing a dictionary or searching Wiktionary is, especially when repeated, becomes a chore.

![/docs/proposal/images/example_aesop.png](/docs/proposal/images/example_aesop.png)

- An example of the Interlinear gloss. *Æsop’s Fables, as Romanized By Phædrus: with a Literal Interlinear Translation* (1832)

[*Interlinear gloss*](https://en.wikipedia.org/wiki/Interlinear_gloss): simply, to annotate the *gloss betweeen the lines*. This is widely used in the linguistic papers, often with grammatical labels. But it also has been used for language learning: it was strongly advocated by [James Hamilton (1769-1829)](https://en.wikipedia.org/wiki/James_Hamilton_(language_teacher))

In [his book defending his system, *The History, Principles, Practice, and Results of the Hamiltonian System* (1829)](https://books.google.co.kr/books/about/The_History_Principles_Practice_and_Resu.html?id=7ZVMhyBftuMC&redir_esc=y), 

*(p.7)*:
> I taught, instead of ordering to learn; and, secondly, I taught my pupils to translate at once, instead of making them get a grammar by heart. I had tried to parse also, as well as translate, as D'Angeli had done with me, but I found this would do only with linguists: the grammar was incomprehensible at this period to the greater number of my pupils; I therefore deferred it till they had taken half the course: by that time ,as they had met in their reading all the inflexions of the verbs, and changes of the other declinable parts of speech, thousands of times, they found grammar an easy task. I then gave them two or three lectures on grammar generally, but particularly the verbs, of which I gave them a copy, and from this period my pupils read at their own home, and in class learned the use of the words they had acquired in reading they read the English Gospel of St. John into French, first after me, in precisely the same manner as I had taught them first to translate French into English, but with this essential difference, my translation into French was a free translation -- in simple but correct language, which they afterwards wrote; and in the correcting of which I gave them the details of the principles or rules of grammar, and thus taught them to write and speak correctly.

*(p. 54)*:
> But there are two objections to this improvement : first, this mode will not teach him grammar! Those who make this objection cannot see the wood for trees! to analyze a phrase word for word, to translate it by corresponding parts of speech, and to point out the grammatical construction of the phrase-the mutual dependance of all the words of a sentence on each other, is not this the very essence of grammar? Could Horace or Virgil do more? -- Ay, but the rules? Horace and Virgil knew none of these rules. But the examiners at the University do, and insist on the knowledge of them, though they do not insist on an extensive knowledge of the meaning of words.

*(p.57)*:
> if he can continue to make his pupil wade through Grammars, Exercise Books, and Dictionaries for years, for the attainment of what I have here proved may be obtained by a far easier, more certain, more effectual, more pleasing mode, in a few months?

And much more. *Also read: [The New Old Way of Learning Languages, The American Scholar (2008)](https://theamericanscholar.org/the-new-old-way-of-learning-languages/)*

## Back to the Interlinear gloss

We agree with Mr. Hamilton's insights, but this project disregarded some points, including the rearranged word orders. So this project's initial reference to the Hamiltonian System had to be removed. The concept of machine-generated and non-proof-read glossing would be enough to render Mr. Hamilton aghast. I did not, by any means, try to par with the quality of authentic Hamiltonian corpora.

## Back to *the Project*

### The LLM.

By the time LLMs (specifically ChatGPT 3.5) arose. Despite the sensationalism, I thought this tech could help projects like this.

#### Instead of ChatGPT API calls, why not build a specialized model? It'd not introduce much requirements.

To be done...

#### API calls

First the text format has to set to be parsed by the script. By its simple requirements, instead of JSON I used simple format:

- Input:
```
0: Je
1: le
2: sais.
```

- Output:
```
0: Je || I
1: le || it
2: sais. || know.
```

The number and the original text were to keep the LLM reminded of the structure.

- While this works, you may be more interested in the new ["Structured outputs"](https://openai.com/index/introducing-structured-outputs-in-the-api/).

And the initial prompt was:
````
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
	i: original_word || gloss
```.
Here, the glosses are delimited with `||`.
No line should be skipped. Otherwise it will raise an error.

For example, if the gloss should be then translation to English,
the reponse shall be:
```
	0: Je || I
	1: suis. || am.
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
	0: Je || I
	1: le || it
	2: sais. || know
```

The output should only consist of the gloss block (```...```) and any other notes will be ignored.
````

With an accompanied example. These long prompt was needed for the set structure, but even with this the LLM would ignore the structure.

- I have to admit that the code wrapping the API call is a hodge-podge ad hoc's. Yet such accords with the spirit of LLM applications.

#### Fine-tuning of ChatGPT

To lessen the token usage and failure rates, the [fine-tuning](https://platform.openai.com/docs/guides/fine-tuning) was needed. Thankfully the corpora to be grinded to the machine were all of the public domain. The texts used are:

- Aesop's Fables as Romanized by Phaedrus with Literal Interlinear Translation (1833)
- Eduard in Schottland, oder die Nacht eines Flüchtlings (1804)
- Selections from the German Poets, with interlinear translations (1853)
- Cornelius Nepos, adapted to the Hamiltonian system by an interlinear and analytical translation (189?)

And on the base model `gpt-3.5-turbo` and later `gpt-4o-mini` the JSONL of 1MB was fed. ([Data](/src/tools/data/gs_240918.jsonl)) By the nature of these corpora the output introduces archaisms like "thy"s.

![/docs/presentation/images/sysarch.png](/docs/presentation/images/sysarch.png)

#### Comparison of the models
| *Time (relative)* | gpt-3.5-turbo | gpt-4o-mini |
| --- | --- | --- |
| default | *100%* | 99.9% |
| fine-tuned | 87.8 % | 88.8% |

Used the 24 poems of *Winterrise*, and used the median value.
- `gpt-4o-mini` is 5 times cheaper.
- Fine-tuned models also use less tokens.

### The corpus preprocessing.

*Read: [the design doc](/docs/design/design.md)*

![/docs/design/images/class_serializable.png](/docs/design/images/class_serializable.png)

*I just like drawing diagrams.*

Simply:
- A `Token`, that is a *word*, will be annotated with a `gloss`.
- `Token`s form a `Paragraph`, which is a unit to be fed to the *annotator*.
- `Paragraph`s form a `Corpus`.

![/docs/proposal/images/proposal_diag.png](/docs/proposal/images/proposal_diag.png)

So:
- The User inputs the *text*, (or a processed `Corpus` JSON, as in the sequence diagram)
- The Backend transforms it into the `Corpus` to be manipulated.
- The *Parser*:
  - Divides the `Corpus` into `Paragraph`. For prose one `"\n"`, and for poem `"\n\n"`.
  - Parses the `Paragraph` into `Token`s. There may be some considerations: such as languages without spacings (e.g. Japanese) and those with particles (e.g. Korean). While this can be handled fairly easily with the NLP libraries, since the targetted source languages (French, German, Latin) need not such considerations, I went with the reliable `re.split()` with `string.whitespace`.
- The *Annotator*: calls the API and put the `gloss` to the `Paragraph`s...

![/docs/design/images/class_manipulators.png](/docs/design/images/class_manipulators.png)
![/docs/design/images/class_req_options.png](/docs/design/images/class_req_options.png)

### The Backend.

Used Django. See [the design doc](/docs/design/design.md) for the endpoints.

![/docs/design/images/er_dj_serializables.png](/docs/design/images/er_dj_serializables.png)

#### Deployment

Deployed on AWS, with the domain ~~`glossysnake dot com`~~ (soon to be on https...)

#### The `TODO`s

- SSL
- Not actual accounts
- No convenient token usage tracking
- Not parallelized; too slow to be used.
- etc., etc., etc. It's not yet for the production.

### The frontend.

Used Vue.js 3.

Since the project's goal is to *nicely wrap* what LLM API gives, the frontend development was not less important than others. I wanna thank GitHub Copilot for helping me write the Vue code; to make a confession, I hate what GenAI outputs for its soul-devoidness. Still tasks like this benefit from GenAI-as-a-tool -- Even in my project the text GenAI generates *supports* the original human text. So I could write the *functioning* frontend in days that is transformed from [a 1200-line pure Javascript code](/src/backend/templates/index.html) that I made to test the backend API. LLM does a good job for such framework-chores. But I have to hate those who use the machine-output code that they can't explain, when such can be done trivially by the very machine.

## The Applications.

[These are included on the frontend.](https://parkchamchi.github.io/GlossySnake/)

## Remarks.

*Chanjin Park a.k.a. "Chamchi"*

*2024.09.21*

# A LaTeX Proof-of-Concept
![/src/tools/latex/werther.png](/src/tools/latex/werther.png)

[The PDF file of *Die Leiden des jungen Werther* (1774)](/src/tools/latex/werther.pdf)

*2024.09.29*

# From here
The project has achieved its initial goal, and I plan to go further:
## To a serverless service
The current codebase is backend-heavy and is not sustainable. I've migrated the annotator to the frontend side so it can be more versatile.
I also plan to reform the frontend.
## Code cleanup
The Python annotator code and the translated Javascript was not much changed from the Proof-of-Concept code. This inefficient and undocumented codebase became hard to maintain. I plan to rewrite the code in more structured way.
## "Natural Language Processing"
I have to disclose, albeit it may be obvious, that I'm not versed with the NLP. *Parsing* of the ChatGPT output (badly) works for now but I plan to go forward too. I'm (re-)learning NLP again and hope to test a fitting approach. There appears to be many papers regarding the application of NLP to the interlinear gloss, espeically for philological interests, so I'd suggest to myself to get in touch with 'em.

*24.10.16*

# Form here #2
After modifying the frontend code it now *fits* my use, but to advance:
## Replace the current Corpus model
The current naive JSON model proved to be computer-heavy. I'm thinking of changing it into XML.
## More structured Frontend structure
The current monolothic indexDB approach too is too heavy.

& much more.
*24.10.22*


