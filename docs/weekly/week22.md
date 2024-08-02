# Week 22
Impl. of iter-3 #5

## 백엔드
### 진행사항
- `/reannotate` API 구현 완료.
  - Backed index에서 token 선택 기능 구현.
- 더 많은 데이터 수집중

### 계획
- ChatGPT를 이용한 `/reannotate` 행동 구현

## 프론트엔드
### 진행사항
- loginpage.html 삭제
- createAccount.html 삭제
- Login-page 접속 방법을 a href 에서 button onclick="()"으로 변경
- Login-page를 기존의 페이지에서 팝업으로 변경
- Login-page 디자인 수정

### error
- input-textarea와 output-textarea의 오른쪽 끝 마감이 위 아래와 일정하지 않음. 각각 위 아래 속성들과 일치하게 수정이 필요.
- edittoken()을 적용하였으나 edit버튼을 눌러도 output textarea의 readonly 속성이 해제되지 않음.

### 차주 목표
- 상기된 오류 수정.
- 선택/수정/삭제 기능 지속적 수정
- main color Select하기(임시: #febe98)
- Sign Up 시스템 구체화
- Login과 Sign Up 기능과 관련해 백엔드 연결