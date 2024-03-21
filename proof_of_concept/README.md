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

## 실행방법
### venv 생성
```
python -m venv .venv 
```
### Activate the venv
```
cd .venv
cd Scripts
activate
cd ../..
```
### 라이브러리 다운로드
```
pip install -r requirements.txt
```
### 프론트엔드 실행
```
cd frontend
python vserver.py
```
브라우저에서 `http://127.0.0.1:56122`으로 진입. 포트 변경은 `-h 123456` 사용
### 예시 업로드
`Browse...` 버튼을 클릭 후 [`example_data/les_champs.json`](example_data/les_champs.json) 업로드