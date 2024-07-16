import json

from django.test import TestCase
from .dj_serializables_v3 import (
    TaskStatusV3 as TaskStatus,
    CorpusHeaderV3 as CorpusHeader,
    DjCorpusV3 as DjCorpus,
    TaskInfoV3 as TaskInfo,
)
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

class CorpusHeader_add_corpus_TestCase(TestCase):
    def setUp(self):
        self.corpus_header = CorpusHeader.objects.create()
        self.corpus_data = {
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
            "original_text": "Test corpus",
            "p_div_locs": '[0]', 
        }

    def test_add_and_serialize_corpus(self):
        corpus_obj = Corpus.fromdict(self.corpus_data)
        self.corpus_header.add_corpus(corpus_obj)
        serialized_corpus = self.corpus_header.get_last_corpus()
        self.assertEqual(serialized_corpus, self.corpus_data)
        
class CorpusHeader_get_corpuses_TestCase(TestCase):
    def setUp(self):
        self.corpus_header = CorpusHeader.objects.create()
        self.dj_corpus1 = DjCorpus.objects.create(
            original_text="Test Corpus 1",
            p_div_locs=[0],
            corpus_header_id=self.corpus_header,
            index=1
        )
        self.dj_corpus2 = DjCorpus.objects.create(
            original_text="Test Corpus 2",
            p_div_locs=[0],
            corpus_header_id=self.corpus_header,
            index=2
        )

    def test_get_corpuses(self):
        corpuses = self.corpus_header.get_corpuses()

        self.assertTrue(corpuses.exists())
        self.assertEqual(len(corpuses), 2)  
       
        self.assertEqual(corpuses[0].index, 1)
        self.assertEqual(corpuses[1].index, 2)

        self.assertEqual(corpuses[0].original_text, "Test Corpus 1")
        self.assertEqual(corpuses[1].original_text, "Test Corpus 2")

class CorpusHeader_current_task_TestCase(TestCase):
    def setUp(self):
        self.corpus_header = CorpusHeader.objects.create()

    def test_current_task_when_no_task(self):
        current_tasks = self.corpus_header.current_task 
        self.assertIsNone(current_tasks)

    def test_current_task_with_tasks(self):
        task1 = TaskInfo.objects.create(
            target_corpus_header_id=self.corpus_header,
            status=TaskStatus.READY 
        )
        task2 = TaskInfo.objects.create(
            target_corpus_header_id=self.corpus_header,
            status=TaskStatus.FINISHED 
        )

        current_tasks = self.corpus_header.current_task 
        self.assertIsNotNone(current_tasks)
        self.assertEqual(len(current_tasks), 1)
        self.assertEqual(current_tasks[0], task1)

class CorpusHeader_corpuses_history_TestCase(TestCase):
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
                        {"txt": "token1", "is_delimiter": False, "gloss": "gloss1", },
                    ],
                    "is_delimiter": False,
                    "token_delimiters": '[1]',  
                    "annotator_info": "{'info': 'test'}",  
                    "original_text": "Paragraph 1",
                },
            ],
            "paragraph_delimiters": ["\n"],
            "original_text": "Test corpus 2",
            "p_div_locs": '[0]', 
        }

    def test_corpuses_history(self):
        corpus_obj1 = Corpus.fromdict(self.corpus_data1)
        self.corpus_header.add_corpus(corpus_obj1)
        
        corpus_obj2 = Corpus.fromdict(self.corpus_data2)
        self.corpus_header.add_corpus(corpus_obj2)

        corpuses_history = self.corpus_header.corpuses_history
        self.assertEqual(len(corpuses_history), 2)

        self.assertEqual(corpuses_history[0], self.corpus_data1)
        self.assertEqual(corpuses_history[1], self.corpus_data2)