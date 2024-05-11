from django.test import TestCase
from django.urls import reverse
from .models import UploadedCorpus
from .parser import Parser
from django.core.exceptions import ValidationError
import json

#TODO: Change the indentaions to '\t'

class UploadedCorpusTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.uc = UploadedCorpus.objects.create(
            corpus_id = "123456789",
            corpuses_history = """
                {
                    "corpuses_history": [
                        {
                            "paragraphs": [],
                            "paragraph_delimiters": [],
                            "original_text": "Les champs n'étaient point noirs, les cieux n'étaient pas mornes.\nNon, le jour rayonnait dans un azur sans bornes\nSur la terre étendu,\nL'air était plein d'encens et les prés de verdures\nQuand il revit ces lieux où par tant de blessures\nSon coeur s'est répandu !\n\nL'automne souriait ; les coteaux vers la plaine\nPenchaient leurs bois charmants qui jaunissaient à peine ;\nLe ciel était doré ;\nEt les oiseaux, tournés vers celui que tout nomme,\nDisant peut-être à Dieu quelque chose de l'homme,\nChantaient leur chant sacré !",
                            "p_div_locs": [],
                            "task_ids": []
                        }
                    ]
                }
            """, #New upload
            current_task = 7777
        )
    
    def test_coupus_id(self):
        self.assertEqual(self.uc.corpus_id, 123456789)
    
    def test_corpuses_history_null(self):
        model = UploadedCorpus.objects.create(corpuses_history = None)
        self.assertIsNone(model.corpuses_history)

	#What is this test for?
    def test_corpuses_history(self):
        sample_data = """
                {
                    "corpuses_history": [
                        {
                            "paragraphs": [],
                            "paragraph_delimiters": [],
                            "original_text": "Les champs n'étaient point noirs, les cieux n'étaient pas mornes.\nNon, le jour rayonnait dans un azur sans bornes\nSur la terre étendu,\nL'air était plein d'encens et les prés de verdures\nQuand il revit ces lieux où par tant de blessures\nSon coeur s'est répandu !\n\nL'automne souriait ; les coteaux vers la plaine\nPenchaient leurs bois charmants qui jaunissaient à peine ;\nLe ciel était doré ;\nEt les oiseaux, tournés vers celui que tout nomme,\nDisant peut-être à Dieu quelque chose de l'homme,\nChantaient leur chant sacré !",
                            "p_div_locs": [],
                            "task_ids": []
                        }
                    ]
                }
            """

    def test_current_task(self):
        self.assertEqual(self.uc.current_task, 7777)
        
    def test_current_task_null(self):
        model = UploadedCorpus.objects.create(current_task = None)
        self.assertIsNone(model.current_task)

    def test_corpus_init_with_valid_input(self):
        sample_corpus = {
            "paragraphs": [],
            "paragraph_delimiters": [],
            "original_text": "Sample text",
            "p_div_locs": [],
            "task_ids": []
        }
        self.uc.corpus_init(sample_corpus)
        self.assertEqual(self.uc.corpuses_history, {"corpuses_history": [sample_corpus]})
    
    """"
    def test_add_corpus(self):
        add_corpus = {
            "paragraphs": [],
            "paragraph_delimiters": [],
            "original_text": "Sample text",
            "p_div_locs": [],
            "task_ids": []
        }
        self.uc.add_corpus(add_corpus)
        #target = json.loads(self.uc.corpuses_history)
        #corpuses = target["corpuses_history"]
        #last_corpus = corpuses[-1]
        #print("Added corpus:", last_corpus)
    """

#What is this class for?
class MockCorpus:
    def __init__(self, original_text):
        self.original_text = original_text
        self.paragraphs = []

#What is this for?
#Also bad indentaions
#Just import from `.serializables`...
class Paragraph:
        def __init__(self, pstate, original_text, is_delimiter, tokens):
            self.pstate = pstate
            self.original_text = original_text
            self.is_delimiter = is_delimiter
            self.tokens = tokens

#Bad class name
class TestParser(TestCase):
    def setUp(self):
        self.parser = Parser()

    def test_divide_into_paragraphs(self):
        text = "asdf\nzxcvzxcv\n\n345"
        corpus = MockCorpus(text)
        self.parser.divide_into_paragraphs(corpus)
        #print("123",len(corpus.paragraphs))
        #print((corpus.paragraphs))
        #self.assertEqual(len(corpus.paragraphs), 3)
    
    def test_divide_into_paragraphs_2(self):
        text = "abc\n\n\nefg"
        corpus = MockCorpus(text)
        self.parser.divide_into_paragraphs(corpus)
        #print("456",len(corpus.paragraphs))
        #print((corpus.paragraphs))
        #self.assertEqual(len(corpus.paragraphs), 2)
    
    def test_parse_sentence_false(self):
        text = "My name is junsik"
        paragraph = Paragraph(pstate="DIVIDED", original_text=text, is_delimiter=False, tokens=[])
        self.parser.parse_paragraph(paragraph)  
        self.assertEqual(len(paragraph.tokens), 4 + 3) #Token includes the delimiters

    def test_parse_sentence_false_2(self):
        text = "a b c"
        paragraph = Paragraph(pstate="DIVIDED", original_text=text, is_delimiter=False, tokens=[])
        self.parser.parse_paragraph(paragraph)  
        self.assertEqual(len(paragraph.tokens), 3 + 2) 

    """def test_parse_sentence_true(self):
        text = "My name is junsik"
        paragraph = Paragraph(pstate="DIVIDED", original_text=text, is_delimiter=True, tokens=[])
        self.parser.parse_paragraph(paragraph)  
        self.assertEqual(len(paragraph.tokens), 1)  
        """