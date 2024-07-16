import json

from django.test import TestCase
from .dj_serializables import *
from .serializables import Corpus, Paragraph, Token, ALLOWED_PSTATES 


class TaskStatusTestCase(TestCase):
    def test_task_status_choice(self):
        self.assertEqual(TaskStatus.READY,"READY")
        self.assertEqual(TaskStatus.RUNNING,"RUNNING")
        self.assertEqual(TaskStatus.FINISHED,"FINISHED")
        self.assertEqual(TaskStatus.ERROR,"ERROR")
        self.assertEqual(TaskStatus.ABORTED,"ABORTED")

    def test_invalid_choice(self):
        with self.assertRaises(ValueError):
            TaskStatus("INVALID")
class CorpusHeaderTestCase(TestCase):
    def setUp(self):
        self.corpus_header = CorpusHeader.objects.create()
        
        self.corpus_data1 = {
            "paragraphs": [
                {
                    "pstate": "ANNOTATED",
                    "tokens": [
                        {"txt": "token1", "is_delimiter": False, "gloss": "gloss1", },
                    ],
                    "is_delimiter": False,
                    "token_delimiters": '[1]',
                    "annotator_info": "{'info': 'test'}",
                    "original_text": "Paragraph 1",
                },
            ],
            "paragraph_delimiters": ["\n"],
            "original_text": "Test corpus 1",
            "p_div_locs": '[0]',
        }
        
        self.corpus_data2 = {
            "paragraphs": [
                {
                    "pstate": "ANNOTATED",
                    "tokens": [
                        {"txt": "token2", "is_delimiter": False, "gloss": "gloss2", },
                    ],
                    "is_delimiter": False,
                    "token_delimiters": '[2]',
                    "annotator_info": "{'info': 'test 2'}",
                    "original_text": "Paragraph 2",
                },
            ],
            "paragraph_delimiters": ["\n"],
            "original_text": "Test corpus 2",
            "p_div_locs": '[1]',
        }
        
        self.corpus_data3 = {
            "paragraphs": [
                {
                    "pstate": "ANNOTATED",
                    "tokens": [
                        {"txt": "token3", "is_delimiter": False, "gloss": "gloss3", },
                    ],
                    "is_delimiter": False,
                    "token_delimiters": '[3]',
                    "annotator_info": "{'info': 'test 3'}",
                    "original_text": "Paragraph 3",
                },
            ],
            "paragraph_delimiters": ["\n"],
            "original_text": "Test corpus 3",
            "p_div_locs": '[2]',
        }

    def test_add_and_serialize_corpus(self):
        corpus_obj = Corpus.fromdict(self.corpus_data1)
        self.corpus_header.add_corpus(corpus_obj)
        serialized_corpus = self.corpus_header.get_last_corpus()
        self.assertEqual(serialized_corpus, self.corpus_data1)

    def test_get_corpuses(self):
        DjCorpus.objects.create(
            original_text="Test Corpus 1",
            p_div_locs=[0],
            corpus_header_id=self.corpus_header,
            index=1
        )
        DjCorpus.objects.create(
            original_text="Test Corpus 2",
            p_div_locs=[0],
            corpus_header_id=self.corpus_header,
            index=2
        )

        corpuses = self.corpus_header.get_corpuses()
        self.assertTrue(corpuses.exists())
        self.assertEqual(len(corpuses), 2)
        self.assertEqual(corpuses[0].index, 1)
        self.assertEqual(corpuses[1].index, 2)
        self.assertEqual(corpuses[0].original_text, "Test Corpus 1")
        self.assertEqual(corpuses[1].original_text, "Test Corpus 2")

    def test_current_task_when_no_task(self):
        current_tasks = self.corpus_header.current_task 
        self.assertIsNone(current_tasks)

    def test_current_task_with_tasks(self):
        task1 = TaskInfo.objects.create(
            target_corpus_header_id=self.corpus_header,
            status=TaskStatus.READY 
        )
        TaskInfo.objects.create(
            target_corpus_header_id=self.corpus_header,
            status=TaskStatus.FINISHED 
        )

        current_tasks = self.corpus_header.current_task 
        self.assertIsNotNone(current_tasks)
        self.assertEqual(len(current_tasks), 1)
        self.assertEqual(current_tasks[0], task1)

    def test_corpuses_history(self):
        corpus_obj1 = Corpus.fromdict(self.corpus_data1)
        self.corpus_header.add_corpus(corpus_obj1)
        
        corpus_obj2 = Corpus.fromdict(self.corpus_data2)
        self.corpus_header.add_corpus(corpus_obj2)

        corpuses_history = self.corpus_header.corpuses_history
        self.assertEqual(len(corpuses_history), 2)

        self.assertEqual(corpuses_history[0], self.corpus_data1)
        self.assertEqual(corpuses_history[1], self.corpus_data2)
    
    def test_get_last_corpus(self):
        corpus_obj1 = Corpus.fromdict(self.corpus_data1)
        self.corpus_header.add_corpus(corpus_obj1)

        last_corpus = self.corpus_header.get_last_corpus()
        self.assertEqual(last_corpus, self.corpus_data1)

    def test_edit_last_corpus_with_invalid_data(self):
        corpus_obj1 = Corpus.fromdict(self.corpus_data1)
        self.corpus_header.add_corpus(corpus_obj1)
        
        corpus_obj2 = Corpus.fromdict(self.corpus_data2)
        self.corpus_header.add_corpus(corpus_obj2)

        invalid_corpus_data = "invalid data"
        
        try:
            self.corpus_header.edit_last_corpus(invalid_corpus_data)
        except Exception as e:
            pass

        last_corpus = self.corpus_header.get_last_corpus()
        self.assertEqual(last_corpus, self.corpus_data2)

class DjCorpusTestCase(TestCase):
    def setUp(self):
        self.corpus_header = CorpusHeader.objects.create()

        self.dj_corpus = DjCorpus.objects.create(
            original_text="This is a test corpus.",
            p_div_locs="[0, 10]",
            corpus_header_id=self.corpus_header,
            index=0
        )

        self.dj_paragraph = DjParagraph.objects.create(
            original_text="This is a test paragraph.",
            pstate="ANNOTATED",
            corpus_id=self.dj_corpus,
            index=0,
            is_delimiter=False  
        )
        
        self.paragraph_delimiter1 = DjParagraphDelimiter.objects.create(
            char='\n'
        )
        
        DjParagraphDelimitersInCorpus.objects.create(
            corpus_id=self.dj_corpus,
            paragraph_delimiter_id=self.paragraph_delimiter1
        )

    def test_get_paragraphs(self):
        paragraphs = self.dj_corpus.get_paragraphs()
        self.assertEqual(paragraphs.count(), 1)
        self.assertEqual(paragraphs[0], self.dj_paragraph)
    
    def test_paragraph_delimiters(self):
        delimiters = self.dj_corpus.paragraph_delimiters
        self.assertEqual(len(delimiters), 1)
        self.assertEqual(delimiters[0], self.paragraph_delimiter1)
    
    def test_to_serializable(self):
        corpus_serializable = self.dj_corpus.to_serializable()
        
        self.assertIsInstance(corpus_serializable, Corpus)
        self.assertEqual(corpus_serializable.original_text, "This is a test corpus.")
        self.assertEqual(corpus_serializable.p_div_locs, "[0, 10]")
        
        self.assertEqual(len(corpus_serializable.paragraphs), 1)
        self.assertIsInstance(corpus_serializable.paragraphs[0], Paragraph)
        self.assertEqual(corpus_serializable.paragraphs[0].original_text, "This is a test paragraph.")

class DjParagraphTestCase(TestCase):
    def setUp(self):
        self.corpus_header = CorpusHeader.objects.create()

        self.dj_corpus = DjCorpus.objects.create(
            original_text="Example corpus text",
            p_div_locs="Example p_div_locs",
            corpus_header_id=self.corpus_header,
            index=1
        )

        self.dj_paragraph = DjParagraph.objects.create(
            pstate="test_state",  
            is_delimiter=False,
            token_delimiters="Example token delimiters",
            annotator_info="Example annotator info",
            original_text="Example original text",
            corpus_id=self.dj_corpus,
            index=1
        )

   
        self.dj_token = DjToken.objects.create(
            txt="Example token text",
            gloss="Example token gloss",
            is_delimiter=False,
            paragraph_id=self.dj_paragraph,
            index=1
        )
    
    def test_get_tokens(self):
        tokens = self.dj_paragraph.get_tokens()

        self.assertEqual(tokens.count(), 1)

        token = tokens.first()
        self.assertEqual(token.txt, "Example token text")
        self.assertEqual(token.gloss, "Example token gloss")
        self.assertEqual(token.is_delimiter, False)

    def test_to_serializable(self):
        self.dj_paragraph.pstate = "ANNOTATED" 
        self.dj_paragraph.save()

        serialized_paragraph = self.dj_paragraph.to_serializable()
        self.assertEqual(serialized_paragraph.pstate, "ANNOTATED")
        self.assertEqual(serialized_paragraph.is_delimiter, False)
        self.assertEqual(serialized_paragraph.token_delimiters, "Example token delimiters")
        self.assertEqual(serialized_paragraph.annotator_info, "Example annotator info")
        self.assertEqual(serialized_paragraph.original_text, "Example original text")

        self.assertEqual(len(serialized_paragraph.tokens), 1)
        self.assertEqual(serialized_paragraph.tokens[0].txt, "Example token text")
        self.assertEqual(serialized_paragraph.tokens[0].gloss, "Example token gloss")
        self.assertEqual(serialized_paragraph.tokens[0].is_delimiter, False)

class DjTokenTestCase(TestCase):
    def setUp(self):
        self.corpus_header = CorpusHeader.objects.create()

        self.dj_corpus = DjCorpus.objects.create(
            original_text="Example corpus text",
            p_div_locs="Example p_div_locs",
            corpus_header_id=self.corpus_header,
            index=1
        )

        self.dj_paragraph = DjParagraph.objects.create(
            pstate="test_state", 
            is_delimiter=False,
            token_delimiters="Example token delimiters",
            annotator_info="Example annotator info",
            original_text="Example original text",
            corpus_id=self.dj_corpus,
            index=1
        )

        self.dj_token = DjToken.objects.create(
            txt="Example token text",
            gloss="Example token gloss",
            is_delimiter=False,
            paragraph_id=self.dj_paragraph,
            index=1
        )

    def test_to_serializable(self):
        self.assertIsNotNone(self.dj_corpus)
        self.assertIsNotNone(self.dj_paragraph)
        self.assertIsNotNone(self.dj_token)

        serialized_token = self.dj_token.to_serializable()

        self.assertEqual(serialized_token.txt, "Example token text")
        self.assertEqual(serialized_token.gloss, "Example token gloss")
        self.assertEqual(serialized_token.is_delimiter, False)

class DjParagraphDelimiterTestCase(TestCase):
    def setUp(self):
        self.dj_paragraph_delimiter = DjParagraphDelimiter.objects.create(
            char="ExampleDelimiter"
        )

    def test_dj_paragraph_delimiter_creation(self):
        delimiter = DjParagraphDelimiter.objects.get(id=self.dj_paragraph_delimiter.id)
        self.assertIsNotNone(delimiter)
        self.assertEqual(delimiter.char, "ExampleDelimiter")

class DjParagraphDelimitersInCorpusTestCase(TestCase):
    def setUp(self):
        self.corpus_header = CorpusHeader.objects.create()

        self.dj_corpus = DjCorpus.objects.create(
            original_text="Example corpus text",
            p_div_locs="Example p_div_locs",
            corpus_header_id=self.corpus_header,
            index=1
        )

        self.dj_paragraph_delimiter = DjParagraphDelimiter.objects.create(
            char="ExampleDelimiter"
        )

        self.dj_paragraph_delimiters_in_corpus = DjParagraphDelimitersInCorpus.objects.create(
            corpus_id=self.dj_corpus,
            paragraph_delimiter_id=self.dj_paragraph_delimiter
        )

    def test_dj_paragraph_delimiters_in_corpus_creation(self):
        delimiters_in_corpus = DjParagraphDelimitersInCorpus.objects.get(id=self.dj_paragraph_delimiters_in_corpus.id)
        self.assertIsNotNone(delimiters_in_corpus)
        self.assertEqual(delimiters_in_corpus.corpus_id, self.dj_corpus)
        self.assertEqual(delimiters_in_corpus.paragraph_delimiter_id, self.dj_paragraph_delimiter)

class TaskInfoTestCase(TestCase):
    def setUp(self):
        self.corpus_header = CorpusHeader.objects.create()

    def test_task_run(self):
        task_info = TaskInfo.objects.create(target_corpus_header_id=self.corpus_header)
        def sample_func(corpus_header, data):
            pass
        task_info.run(sample_func, data=None)
        self.assertEqual(task_info.status, TaskStatus.FINISHED)

    def test_task_abort(self):
        task_info = TaskInfo.objects.create(target_corpus_header_id=self.corpus_header)
        task_info.abort()
        self.assertEqual(task_info.status, TaskStatus.READY)

    def test_task_get_logs(self):
        task_info = TaskInfo.objects.create(target_corpus_header_id=self.corpus_header)
        logs = task_info.get_logs()
        self.assertIsNone(logs) 
