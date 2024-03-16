# Proof-of-Concept
As of 2024.03.16.

## Frontend
Requires `flask` and `flask_bootstrap` (Don't ask me why...)
```
python frontend/vserver.py
```

## Backend
Requires `flask` and the dependencies required by the core logic scripts
```
python backend/rserver.py
```

## Core logic scripts

### intergloss.py
Defines `Token`, `Paragraph`, `Corpus`, `GlossFetcher`, `GlossEmbedder`.
- `Token`: a word.
- `Paragraph`: a set of tokens.
- `Corpus`: a set of paragraphs.
- `GlossFetcher`: returns a list of glosses (that is a list of lists of strings)
- `GlossEmbedder`: puts the glosses to the paragraph.

### chatgpt_glossfetcher.py
An implementation of `GlossFetcher`, using the OpenAI API.<br>
Imports:
```
import openai
import tiktoken
import dotenv
```