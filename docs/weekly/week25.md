# Week 25
Impl. of iter-3 #8

## 백엔드
### 진행사항
- `/reannotate`를 위한 `gpt-3.5-turbo` 파인튜닝 완료.
- 계정 기능 추가. API는 [design doc](docs/design/design.md) 참조.
- 앞으로 모든 API는 계정이 로그인 됨을 가정함. *(TODO: Guest 계정 기능 추가할 것)*
- Note: 모든 POST endpoint는 CSRF 토큰을 헤더에 넣어야 함. (design doc참조)

### 다음 목표
- Guest 계정 구현
- `gpt-4o-mini` 파인튜닝 테스트
- 각 모델에 User 정보를 넣어 개인화하기

## 프론트엔드
### 진행사항
- 직관성 확보를 위한 디자인 일부 수정
- 지속적인 버그 수정 및 오류 개선

### error
- input-textarea와 output-textarea의 오른쪽 끝 마감이 위 아래와 일정하지 않음. 각각 위 아래 속성들과 일치하게 수정이 필요.
- edittoken()을 적용하였으나 edit버튼을 눌러도 output textarea의 readonly 속성이 해제되지 않음.

### 차주 목표
- 상기된 오류 수정.
- 선택/수정/삭제 기능 지속적 수정
- main color Select하기(임시: #febe98)
- Login과 Sign Up 기능과 관련해 백엔드 연결
