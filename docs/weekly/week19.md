# Week 19
Impl. of iter-3 #2

## 백엔드
### 진행사항
- API v3 구현 및 완료.
  - 하지만 Token을 분리해 구현하다 보니 처리속도가 많이 느려짐.
  - Token을 장고 모델로 구현하여 각각 저장하는 것은 이점이 크지 않다고 생각되어 Paragraph에 Json형태로 저장하는 다음 모델을 구상하여 타협할 예정.
  - /api/v3으로 접근 가능.

### 계획
다음주까지:
- `/api/v4` 계획 및 구현
- corpus에 api 정보 저장

## 프론트엔드

### 진행사항
- 토큰을 SELECT하면 아래 Resultbox에 최종 결과값을 표출하게 해주는 selecttoken()함수를 생성함. 사용자가 select버튼을 누른 뒤 alert로 최종적으로 선택할 것인지에 대해 묻는 기능을 넣음.
- 토큰을 EDIT하면 아래 Resultbox에 최종 결과값을 표출하게 해주는 edittoken()함수를 생성함. 사용자가 edit버튼을 누르면 readonly mode였던 output box가 readonly모드를 해제하고 "can edit" alert를 생성하며 수정을 가능하게 해줌.
- resultbox 직관성 추가.

### 차주 목표
- 상기된 오류 수정.
- 토큰 삭제 기능 추가 및 선택/수정 기능 수정
- main color Select하기.
- 사용자가 입력한 input-textarea의 말뭉치를 띄어쓰기 혹은 특수문자를 기준으로 배열화하기.