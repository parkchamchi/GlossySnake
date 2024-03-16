# Week 2

## 사용 프레임워크
- 프론트엔드: Vue.js 3.0
- 백엔드: Django

## Token+Gloss JSON 데이터 형태 제안
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

### 예시: *Les champs`\n\n`n'etaient ...*
```json
{
	"paragraph_delimiters": [
		"\n"
	],
	"paragraphs": [
		{
			"is_delimiter": false,
			"token_delimiters": " \t\n\r\u000b\f",
			"tokens": [
				{
					"txt": "Les",
					"is_delimiter": false,
					"gloss": "The"
				},
				{
					"txt": " ",
					"is_delimiter": true,
					"gloss": null
				},
				{
					"txt": "champs",
					"is_delimiter": false,
					"gloss": "fields"
				}
			]
		},
		{
			"is_delimiter": true,
			"token_delimiters": " \t\n\r\u000b\f",
			"tokens": [
				{
					"txt": "\n\n",
					"is_delimiter": true,
					"gloss": null
				}
			]
		},
		{
			"is_delimiter": true,
			"token_delimiters": " \t\n\r\u000b\f",
			"tokens": [
				{
					"txt": "n'\u00e9taient",
					"is_delimiter": false,
					"gloss": "!UNKNOWN"
				}
			]
		}
	]
}
```

## 요구사항 추출

### 프론트엔드
- 말뭉치 입력창
  - 사용자가 임의로 문단을 나눌 수 있게 함.
- 기타 옵션창
  - 엔드포인트, paser, annotator 설정
  - 출발/도착 언어 설정
  - "기타 옵션"
- 상태창
  - 서버에서 오는 메세지 등
- 결과물 표현창
  - 읽기 편해야 함

### 백엔드
- 말뭉치 입력 엔드포인트
- 재전송 요청 엔드포인트
- 로그인 등 계정 관리 엔드포인트
- 기타 상태확인 엔드포인트

- 캐싱 등 기능적 요소

### 시나리오
- 백엔드가 응답하지 않을 때
- 제공된 말뭉치가 올바르지 않을 때
- 백엔드 상에서 오류가 발생했을 때
- 결과물의 질이 기준에 도달하지 못했을 때
  - 프론트엔드에서 재전송 요청
  - 프론트엔드에서 재전송을 원하는 일부 단어를 선택 후 재전송 요청
  - 프론트엔드는 재전송된 결과물을 검토 후 적용 가능

## 기타 과제
- Proof-of-Concept 제공
- 기술적 준비: 단순 Vue와 Flask 프로젝트 제작 (다다음주까지)

## 일정
다음주: 요구사항 명세 준비