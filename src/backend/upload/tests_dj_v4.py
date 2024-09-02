import json

from django.test import TestCase
from .dj_serializables_v4 import (
    TaskStatusV4 as TaskStatus,
    CorpusHeaderV4 as CorpusHeader,
    DjCorpusV4 as DjCorpus,
    DjParagraphV4 as DjParagraph,
    DjParagraphDelimiterV4 as DjParagraphDelimiter,
    DjParagraphDelimitersInCorpusV4 as DjParagraphDelimitersInCorpus,
    TaskInfoV4 as TaskInfo,
)
from .serializables import Corpus, Paragraph, Token, ALLOWED_PSTATES 
from django.contrib.auth import get_user_model
from django.core.exceptions import PermissionDenied
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.urls import path

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
            index=1,
            tokens_json={"tokens": [{"txt": "Example token text", "gloss": "Example token gloss", "is_delimiter": False}]}
        )

    def test_tokens_getter(self):
        tokens = self.dj_paragraph.tokens
        self.assertEqual(len(tokens), 1)
        self.assertEqual(tokens[0].txt, "Example token text")
        self.assertEqual(tokens[0].gloss, "Example token gloss")
        self.assertEqual(tokens[0].is_delimiter, False)

    def test_tokens_setter(self):
        new_tokens = [
            Token(txt="New token text 1", gloss="New gloss 1", is_delimiter=False),
            Token(txt="New token text 2", gloss="New gloss 2", is_delimiter=True)
        ]

        self.dj_paragraph.tokens = new_tokens
        self.dj_paragraph.save()

        tokens = self.dj_paragraph.tokens
        self.assertEqual(len(tokens), 2)
        self.assertEqual(tokens[0].txt, "New token text 1")
        self.assertEqual(tokens[0].gloss, "New gloss 1")
        self.assertEqual(tokens[0].is_delimiter, False)
        self.assertEqual(tokens[1].txt, "New token text 2")
        self.assertEqual(tokens[1].gloss, "New gloss 2")
        self.assertEqual(tokens[1].is_delimiter, True)

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

        if serialized_paragraph.tokens:
            self.assertEqual(serialized_paragraph.tokens[0].txt, "Example token text")
            self.assertEqual(serialized_paragraph.tokens[0].gloss, "Example token gloss")
            self.assertEqual(serialized_paragraph.tokens[0].is_delimiter, False)

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

User = get_user_model()

class CorpusOwnershipTest(TestCase):
    def setUp(self):
        self.user1 = User.objects.create_user(username='user1', password='pass1')
        self.user2 = User.objects.create_user(username='user2', password='pass2')
        self.corpus_header = CorpusHeader.objects.create(user=self.user1)
        self.corpus_data = {
            'original_text': 'Sample text',
            'p_div_locs': [],
            'paragraphs': [],  
            'paragraph_delimiters': []
        }
        self.corpus_header.add_corpus(self.corpus_data)

    def test_user1_can_add_corpus(self):
        corpus_data = {
            'original_text': 'Another sample text',
            'p_div_locs': [],
            'paragraphs': [],
            'paragraph_delimiters': []
        }
        try:
            self.corpus_header.add_corpus(corpus_data)
            added_corpus = DjCorpus.objects.filter(corpus_header_id=self.corpus_header.id)
            self.assertEqual(added_corpus.count(), 2) 
        except PermissionDenied:
            self.fail('User1 should be able to add a corpus')

    def test_user2_cannot_add_corpus(self):
        corpus_data = {
            'original_text': 'Another sample text',
            'p_div_locs': [],
            'paragraphs': [],
            'paragraph_delimiters': []
        }

        self.corpus_header.user = self.user1
        self.corpus_header.save()
        

        with self.assertRaises(PermissionDenied):
            if self.corpus_header.user != self.user2:
                #print("aaaaa")
                raise PermissionDenied("You do not have permission to add corpus to this header.")
            self.corpus_header.add_corpus(corpus_data)
    
    def test_user1_can_edit_corpus(self):
        new_corpus_data = {
            'original_text': 'Edited sample text',
            'p_div_locs': [],
            'paragraphs': [],
            'paragraph_delimiters': []
        }
        try:
            self.corpus_header.edit_last_corpus(new_corpus_data)
            last_corpus = self.corpus_header.get_last_corpus()
            self.assertEqual(last_corpus['original_text'], 'Edited sample text')
        except PermissionDenied:
            self.fail('User1 should be able to edit the corpus')

    def test_user2_cannot_edit_corpus(self):
        new_corpus_data = {
            'original_text': 'Edited sample text',
            'p_div_locs': [],
            'paragraphs': [],
            'paragraph_delimiters': []
        }
        self.corpus_header.user = self.user1
        self.corpus_header.save()

        with self.assertRaises(PermissionDenied):
            if self.corpus_header.user != self.user2:
                raise PermissionDenied("You do not have permission to edit this corpus.")
            self.corpus_header.edit_last_corpus(new_corpus_data)

    def test_user1_can_delete_corpus(self):
        try:
            last_corpus = self.corpus_header.get_corpuses().last()
            last_corpus.delete()
            corpuses_count = self.corpus_header.get_corpuses().count()
            self.assertEqual(corpuses_count, 0)  
        except PermissionDenied:
            self.fail('User1 should be able to delete the corpus')

    def test_user2_cannot_delete_corpus(self):
        self.corpus_header.user = self.user1
        self.corpus_header.save()
        last_corpus = self.corpus_header.get_corpuses().last()

        with self.assertRaises(PermissionDenied):
            if self.corpus_header.user != self.user2:
                raise PermissionDenied("You do not have permission to delete this corpus.")
            last_corpus.delete()
    
class DjCorpusOwnershipTest(TestCase):
    def setUp(self):
        self.user1 = User.objects.create_user(username='user1', password='pass1')
        self.user2 = User.objects.create_user(username='user2', password='pass2')
        self.corpus_header = CorpusHeader.objects.create(user=self.user1)
        self.corpus_data = {
            'original_text': 'Sample text',
            'p_div_locs': '[]',  
            'index': 1
        }
        self.dj_corpus = DjCorpus.objects.create(
            original_text=self.corpus_data['original_text'],
            p_div_locs=self.corpus_data['p_div_locs'],
            corpus_header_id=self.corpus_header,
            index=self.corpus_data['index']
        )

    def test_user1_can_access_corpus(self):
        try:
            paragraphs = self.dj_corpus.get_paragraphs()
            serializable_data = self.dj_corpus.to_serializable()
            self.assertIsNotNone(paragraphs)
            self.assertIsNotNone(serializable_data)
        except PermissionDenied:
            self.fail('User1 should be able to access the corpus')

    def test_user2_cannot_access_corpus(self):
        with self.assertRaises(PermissionDenied):
            if self.dj_corpus.corpus_header_id.user != self.user2:
                raise PermissionDenied("User2 does not have permission to access this corpus.")
            paragraphs = self.dj_corpus.get_paragraphs()

        with self.assertRaises(PermissionDenied):
            if self.dj_corpus.corpus_header_id.user != self.user2:
                raise PermissionDenied("User2 does not have permission to access this corpus.")
            serializable_data = self.dj_corpus.to_serializable()

    def test_user1_can_edit_corpus(self):
        try:
            self.dj_corpus.original_text = 'Edited text'
            self.dj_corpus.save()
            self.assertEqual(self.dj_corpus.original_text, 'Edited text')
        except PermissionDenied:
            self.fail('User1 should be able to edit the corpus')

    def test_user2_cannot_edit_corpus(self):
        with self.assertRaises(PermissionDenied):
            if self.dj_corpus.corpus_header_id.user != self.user2:
                raise PermissionDenied("User2 does not have permission to edit this corpus.")
            self.dj_corpus.original_text = 'Edited text'
            self.dj_corpus.save()

    def test_user1_can_delete_corpus(self):
        try:
            self.dj_corpus.delete()
            corpuses_count = DjCorpus.objects.filter(corpus_header_id=self.corpus_header).count()
            self.assertEqual(corpuses_count, 0)
        except PermissionDenied:
            self.fail('User1 should be able to delete the corpus')

    def test_user2_cannot_delete_corpus(self):
        with self.assertRaises(PermissionDenied):
            if self.dj_corpus.corpus_header_id.user != self.user2:
                raise PermissionDenied("User2 does not have permission to delete this corpus.")
            self.dj_corpus.delete()

class DjParagraphOwnershipTest(TestCase):
    def setUp(self):
        self.user1 = User.objects.create_user(username='user1', password='pass1')
        self.user2 = User.objects.create_user(username='user2', password='pass2')
        self.corpus_header1 = CorpusHeader.objects.create(user=self.user1)
        self.corpus_header2 = CorpusHeader.objects.create(user=self.user2)
        self.corpus1 = DjCorpus.objects.create(
            original_text='Sample Corpus 1',
            p_div_locs='',
            corpus_header_id=self.corpus_header1,
            index=1
        )
        self.corpus2 = DjCorpus.objects.create(
            original_text='Sample Corpus 2',
            p_div_locs='',
            corpus_header_id=self.corpus_header2,
            index=1
        )

        self.paragraph1 = DjParagraph.objects.create(
            tokens_json={'tokens': [{'text': 'token1', 'start': 0, 'end': 5}]},
            pstate='VALID',
            is_delimiter=False,
            token_delimiters='',
            annotator_info='info',
            original_text='Paragraph for user1.',
            corpus_id=self.corpus1,
            index=0,
            lang_from='en',
            lang_to='fr',
            annotator_name='John Doe'
        )
        self.paragraph2 = DjParagraph.objects.create(
            tokens_json={'tokens': [{'text': 'token2', 'start': 0, 'end': 5}]},
            pstate='VALID',
            is_delimiter=False,
            token_delimiters='',
            annotator_info='info',
            original_text='Paragraph for user2.',
            corpus_id=self.corpus2,
            index=0,
            lang_from='es',
            lang_to='en',
            annotator_name='Jane Doe'
        )

    def test_user1_can_create_paragraph(self):
        new_paragraph_data = {
            'tokens_json': {'tokens': [{'text': 'token3', 'start': 0, 'end': 5}]},
            'pstate': 'VALID',
            'is_delimiter': False,
            'token_delimiters': '',
            'annotator_info': 'new info',
            'original_text': 'New paragraph for user1.',
            'corpus_id': self.corpus1,
            'index': 1,
            'lang_from': 'de',
            'lang_to': 'en',
            'annotator_name': 'John Smith'
        }
        paragraph = DjParagraph.objects.create(**new_paragraph_data)
        self.assertEqual(DjParagraph.objects.count(), 3)
        self.assertEqual(paragraph.original_text, 'New paragraph for user1.')
    
    def test_user2_cannot_create_paragraph_for_user1(self):
        new_paragraph_data = {
            'tokens_json': {'tokens': [{'text': 'token4', 'start': 0, 'end': 5}]},
            'pstate': 'VALID',
            'is_delimiter': False,
            'token_delimiters': '',
            'annotator_info': 'new info',
            'original_text': 'New paragraph for user1 but created by user2.',
            'corpus_id': self.corpus1,
            'index': 2,
            'lang_from': 'fr',
            'lang_to': 'en',
            'annotator_name': 'Jane Smith'
        }

        with self.assertRaises(PermissionDenied):
            if self.corpus1.corpus_header_id.user != self.user2:
                raise PermissionDenied("You do not have permission to create a paragraph for this corpus.")
            DjParagraph.objects.create(**new_paragraph_data)
    
    def test_user1_can_edit_own_paragraph(self):
        self.paragraph1.original_text = 'Edited paragraph for user1.'
        self.paragraph1.save()
        updated_paragraph = DjParagraph.objects.get(id=self.paragraph1.id)
        self.assertEqual(updated_paragraph.original_text, 'Edited paragraph for user1.')

    def test_user2_cannot_edit_user1_paragraph(self):
        self.paragraph1.original_text = 'Attempt to edit by user2.'
        with self.assertRaises(PermissionDenied):
            if self.paragraph1.corpus_id.corpus_header_id.user != self.user2:
                raise PermissionDenied("You do not have permission to edit this paragraph.")
            self.paragraph1.save()

    def test_user1_can_delete_own_paragraph(self):
        self.paragraph1.delete()
        self.assertEqual(DjParagraph.objects.count(), 1)  #

    def test_user2_cannot_delete_user1_paragraph(self):
        with self.assertRaises(PermissionDenied):
            if self.paragraph1.corpus_id.corpus_header_id.user != self.user2:
                raise PermissionDenied("You do not have permission to delete this paragraph.")
            self.paragraph1.delete()
'''    
class CorpusHeaderOwnershipTest2(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='user1', password='pass1')
        self.client.login(username='user1', password='pass1')
        self.url = reverse('api-v4-upload')  
        self.corpus_data = {
            'original_text': 'Sample text',
            'p_div_locs': [],
            'paragraphs': [],  
            'paragraph_delimiters': []
        }
    
    def test_user1_can_create_corpus(self):
        response = self.client.post(self.url, {'corpus': self.corpus_data}, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(CorpusHeader.objects.count(), 1)
        corpus_id = response.data['corpus_id']
        self.assertIsNotNone(corpus_id)

    def test_user2_cannot_create_corpus_for_user1(self):
        self.client.logout()
        self.client.login(username='user2', password='pass2')
        response = self.client.post(self.url, {'corpus': self.corpus_data}, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(CorpusHeader.objects.count(), 0)

    def test_user1_can_read_own_corpus(self):
        response = self.client.post(self.url, {'corpus': self.corpus_data}, format='json')
        corpus_id = response.data['corpus_id']

        url = reverse('api-v4-corpuses-pk', args=[corpus_id])
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        self.assertIn('corpuses_history', response.data)
        self.assertGreater(len(response.data['corpuses_history']), 0)

        first_corpus = response.data['corpuses_history'][0]
        self.assertIn('original_text', first_corpus)
        self.assertEqual(first_corpus['original_text'], self.corpus_data['original_text'])
    
    def test_user2_cannot_read_user1_corpus(self):
        response = self.client.post(self.url, {'corpus': self.corpus_data}, format='json')
        corpus_id = response.data['corpus_id']

        self.client.logout()
        self.client.login(username='user2', password='pass2')
    
        url = reverse('api-v4-corpuses-pk', args=[corpus_id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
'''    
class CheckUserViewTest(TestCase):
    def setUp(self):
        # 테스트용 클라이언트 생성
        self.client = APIClient()
        # 테스트용 사용자 생성
        self.user = User.objects.create_user(username='testuser', email='testuser@example.com', password='testpassword')

    def test_authenticated_user(self):
        self.client.login(username='testuser', password='testpassword')
        url = reverse('api-v4-user-check') 
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['is_auth'])
        #print(response.data['is_auth'])
        self.assertEqual(response.data['username'], 'testuser')
        #print(response.data['username'])
        self.assertEqual(response.data['email'], 'testuser@example.com')
        #print(response.data['email'])

    def test_unauthenticated_user(self):
        url = reverse('api-v4-user-check')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertFalse(response.data['is_auth'])
        self.assertEqual(response.data['erorr'], "User is not authenticated.")
        #print(response.data['erorr'])