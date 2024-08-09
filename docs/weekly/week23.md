# Week 23
Impl. of iter-3 #6

## 백엔드
### 진행사항
- `/reannotate` 백엔드 구조 구현 완료.
- 더 많은 데이터 수집중 (OCR 활용)

### 계획
- LLM API를 이용한 `/reannotate` 완전구현

## 프론트엔드
### 진행사항
- 가독성 및 통일성을 위해 div에 id와 class-name이 동시에 부과될 경우 id를 앞으로 배치함.
- 가독성 및 통일성을 위해 각 div의 id와 class-name이 두 단어 이상의 합성어로 이루어질 경우 id는 idExample 형태로, class-name는 class-name-example 형태를 명명/수정함.
- div의 id와 classname 일부 변경
- 추후에도 새 div를 필요에 의해 생성할 경우 각 div의 id와 class-name은 Week23에 명시된 양식으로 명명하도록 함.
- src/frontend/ "mockup.html", "mockup_network_success.html", "design_bone.html" 삭제
- "mockup_frontend_design.html" -> "mockup.html" 이름 변경

### error
- input-textarea와 output-textarea의 오른쪽 끝 마감이 위 아래와 일정하지 않음. 각각 위 아래 속성들과 일치하게 수정이 필요.
- edittoken()을 적용하였으나 edit버튼을 눌러도 output textarea의 readonly 속성이 해제되지 않음.

### 차주 목표
- 상기된 오류 수정.
- 선택/수정/삭제 기능 지속적 수정
- main color Select하기(임시: #febe98)
- Sign Up 시스템 구체화
- Login과 Sign Up 기능과 관련해 백엔드 연결
