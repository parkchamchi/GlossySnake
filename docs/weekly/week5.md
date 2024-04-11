# Week 5

## Iter 1. (cont.)

### 백엔드 구현
- [/src/backend/@week5](https://github.com/parkchamchi/GlossySnake/tree/week5/src/backend): Django를 이용하여 [Week 4](/docs/weekly/week4.md)의 목업 구현 완료.
- 이를 PoC의 변형을 이용해 테스트해보니 여러 수정해야 할 요소가 발견됨.

## Iter 2. (Init.)

## Polished design
- [/docs/design/design.md@week5](https://github.com/parkchamchi/GlossySnake/blob/week5/docs/design/design.md)
- 백엔드가 JSON을 바로 반환할 시 오류 발생이나 진행사항 확인에 어려움이 있음.
- 이에 프론트엔드는 먼저 `/upload`로 corpus를 업로드 한 뒤 `/parser/divide` 등과 같은 엔드포인트를 이용해 이를 manipulate하는 방식으로 전환함.
- Token과 같이 serializable한 클래스들과 각종 manipulators도 elaborate함.

## 다음 목표
- 다다음주까지 프론트엔드는 HTML로 목업 구현, 백엔드는 `/upload`, `/parser/divide`, `/parser/parse` 구현