# Week 26
Impl. of iter-3 #9

## 백엔드
### 진행사항
- 계정 기능 완전 구현
  - 각 Corpus에 대한 owernership 구현
  - 로그인 endpoint에서 더이상 `username`을 요구하지 않음

### 다음 목표
Deploy를 위한 User 모델 트윅

## 프론트엔드
### 진행사항
- output textare의 readonly 속성 해제 준비중
- 계정 생성 및 로그인헤더 과정 진행중

### error
- input-textarea와 output-textarea의 오른쪽 끝 마감이 위 아래와 일정하지 않음. 각각 위 아래 속성들과 일치하게 수정이 필요.
- edittoken()을 적용하였으나 edit버튼을 눌러도 output textarea의 readonly 속성이 해제되지 않음.

### 차주 목표
- 상기된 오류 수정.
- 선택/수정/삭제 기능 지속적 수정
- main color Select하기(임시: #febe98)
- Login과 Sign Up 기능과 관련해 백엔드 연결
