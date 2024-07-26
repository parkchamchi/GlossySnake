# Week 20
Impl. of iter-3 #3

## 백엔드
### 진행사항
- `api/v4` 구현 완료. 앞으로 api 버전을 올릴 이유는 당분간 없을 듯.
- `tasks/pk/abort` 구현 완료.
- index page에서 task 시각화 완료.

### 계획
- task의 ttl이 지나면 자동으로 abort하는 기능 추가.
- paragraph 당 annotate가 되지 않는 오류 수정.
- 기타 reannotate 등 기능 추가.

## 프론트엔드
### 진행사항
- 사용자가 입력한 input-textarea의 말뭉치를 띄어쓰기를 기준으로 배열화 하였음.
- deletetoken()기능 추가.

### error.
- input-textarea와 output-textarea의 오른쪽 끝 마감이 위 아래와 일정하지 않음. 각각 위 아래 속성들과 일치하게 수정이 필요.
- arrow box의 위치 수정 필요.
- option_div에 text-align:center;가 적용되지 않는 오류 발생. 수정 필요.
- edittoken()을 적용하였으나 edit버튼을 눌러도 output textarea의 readonly 속성이 해제되지 않음.

### 차주 목표
- 상기된 오류 수정.
- 선택/수정/삭제 기능 수정
- main color Select하기.