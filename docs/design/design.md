# 설계

## Frontend

### UI
![images/frontend_main_ui.png](images/frontend_main_ui.png)

Proof-of-Concept 참조.

- `Preview` 버튼은 문단과 관련된 기능을 위한 것임. (`UC003` & `UC004` 참조)
  - 구현 전에는 버튼이 눌리면 에러 메세지를 띄울 것.
- 메세지창은 제거하지 않으면 계속 쌓임.

### Tokens
- Token은 클릭으로 선택/비선택을 toggle할 수 있음.
- Token에 마우스를 hover하면 희미한 회색의 버튼 (역삼각형 모양)이 뜨며, 이를 누르면 "수정" 등의 액션 (cf. `UC012`)이 있는 드롭다운이 나타나야 함.

## Backend

### Endpoints
e.g. `http://localhost/v1/glosses/annotate`

#### v1
- `POST /glosses/annotate`
- `POST /glosses/reannotate`
- `GET /login` (redirection)
- `GET /logout` (redirection)

- `POST /glosses/preprocess/` (cf. `UC003`)

## JSON

### Request JSON
![images/reqjson.png](images/reqjson.png)

### Result JSON

![images/resjson.png](images/resjson.png)

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
