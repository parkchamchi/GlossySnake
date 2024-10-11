# Local Annotation

The corpus manipulating behaviors (`/parse`, `/annotate`, ...) are being moved to the frontend side.
For the annotation their oculd be simpler methods (e.g., stemming and dictionary indexing) the current implementation is the ChatGPT application.

1. Uncheck the `To the remote server` to use the local manipulators.
2. Set Local Annotator Options. 
  - Using the fine-tuned model ([data](https://github.com/parkchamchi/GlossySnake/blob/master/src/tools/data/gs_240918.jsonl)) is recommended.
  - The `Full Prompt` option can be turned off when the fine-tuned model is used.

Right now it's quite experimental. I promise to gradually improve the code and the experience.

P.S. If one sees the ChatGPT application code (both python and javascript (which was translated from python)) he will find the messiness of the code. I plan to rewrite this codebase.