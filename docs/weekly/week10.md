# Week 10
Impl. of iter-2 #3

## 구현물

### 백엔드
[/src/backend/@week10](https://github.com/parkchamchi/GlossySnake/tree/week10/src/backend)
- API 테스트 코드 구현 (`tests_api.py` 참조)
  - `/upload`, `/parser/divide`, `/parser/parse` 대상
- `Task` 대상 parallel 코드를 작성했으나 현재 테스트 환경에서 쓰이는 sqlite DB에는 부적절하여 비활성화 해놓음.

### 공통
- CORS 오류 해결
  - 프론트엔드는 `http://127.0.0.1:56122` origin에서 테스트할 것.
  - `/src/frontend/`에 위치한 [`simple_flask_server.py`](https://github.com/parkchamchi/GlossySnake/tree/week10/src/frontend/simple_flask_server.py)를 사용해도 되고, 나중에 Vue3을 사용하게 될 때도 이 uri를 이용할 것.
  - 앞으로 오류 발생시 문서화하고 Issues 등을 활용할 것.

## 다음 목표
다음주까지
- 백엔드는 `/annotator/annotate` 구현 및 local manipulators 테스트 코드
- 프론트엔드는 `/upload` 통신 구현