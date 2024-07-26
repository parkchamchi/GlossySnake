# Week 21
Impl. of iter-3 #4

## 백엔드
### 진행사항
- 백엔드 인덱스 페이지에서 JSON 다운로드/업로드 기능 추가
- `api/v4`에서 paragraph 당 annotate가 되지 않던 오류 수정
- 레거시 `v1` 코드 정리
- `/reannotate` 스켈레톤

### 계획
- `/reannotate` 설계 및 구현

## 프론트엔드
- arrow box 등 일부 디자인 수정

### error
- input-textarea와 output-textarea의 오른쪽 끝 마감이 위 아래와 일정하지 않음. 각각 위 아래 속성들과 일치하게 수정이 필요.
- edittoken()을 적용하였으나 edit버튼을 눌러도 output textarea의 readonly 속성이 해제되지 않음.

### 차주 목표
- 상기된 오류 수정.
- 선택/수정/삭제 기능 지속적 수정
- main color Select하기.