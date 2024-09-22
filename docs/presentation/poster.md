# Interlinear translation 웹앱

## 개요
외국어 텍스트를 Interlinear translation 말뭉치로 변환시키고 이용할 수 있는 웹 서비스


## 프로젝트 소개
문장이 아닌 단어를 단위로 주석을 제공하는 언어학습 문헌은 19세기부터 사용되었지만 제한된 말뭉치의 양으로 인해 접근성이 낮았다. 이를 해소하기 위해 LLM을 이용하여 주석을 자동화하고 JSON을 쉽게 시각화 및 다운로드할 수 있게 하였다.

### 시스템 아키텍처
![/docs/presentation/images/sysarch.png](/docs/presentation/images/sysarch.png)

## 구현 결과
주석을 다는 자연어 처리는 ChatGPT 4o-mini를 파인튜닝하여 사용하였고, 말뭉치를 가공하는 백엔드는 Django로 작성되고 AWS에서 deploy되었다. 백엔드와 REST API를 통해 통신하는 프론트엔드는 Vue.js로 작성되었다. 
사용자는 원하는 텍스트나 이미 가공된 JSON 파일을 업로드하고, 프론트엔드에서 이를 Interlinear translation이 적용된 실제 문헌과 비슷한 형태로 표시한다. 가공된 말뭉치는 JSON형태로 다운로드할 수도 있다.

### 업로드 화면
![/docs/presentation/images/fig_upload.png](/docs/presentation/images/fig_upload.png)
### 제공 말뭉치 화면
![/docs/presentation/images/fig_annotated_corpus.png](/docs/presentation/images/fig_annotated_corpus.png)
### 모델 선택 화면
![/docs/presentation/images/fig_annotator_select.png](/docs/presentation/images/fig_annotator_select.png)

## 기대효과
19세기 퍼블릭 도메인 문헌과 유료 서비스에 제한되어 있던 Interlinear translation 언어학습을 자연어처리로 자동화하여 쉽게 접근할 수 있고 이에 맞게 포맷된 JSON을 획득할 수 있다.
