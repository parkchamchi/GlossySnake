from django.test import TestCase
from django.urls import reverse
from .models import UploadedCorpus
from .parser import Parser
from django.core.exceptions import ValidationError
from .serializables import Paragraph,Corpus

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
            """, #New uploa
            current_task = 7777
        )
    
    def test_coupus_id(self):
        self.assertEqual(self.uc.corpus_id,123456789)
    
    def test_corpuses_history_null(self):
        model = UploadedCorpus.objects.create(corpuses_history = None)
        self.assertIsNone(model.corpuses_history)

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
        self.assertEqual(self.uc.corpuses_history, sample_data)

    def test_current_task(self):
        self.assertEqual(self.uc.current_task,7777)
        
    def test_current_task_null(self):
        model = UploadedCorpus.objects.create(current_task = None)
        self.assertIsNone(model.current_task)

    def test_corpus_init(self):
        sample_corpus = {
            "paragraphs": [],
            "paragraph_delimiters": [],
            "original_text": "Sample text",
            "p_div_locs": [],
            "task_ids": []
        }
        self.uc.corpus_init(sample_corpus)
        self.assertEqual(self.uc.corpuses_history, {"corpuses_history": [sample_corpus]})
    
    def test_add_corpus(self):
        add_corpus = {
            "paragraphs": [],
            "paragraph_delimiters": [],
             "original_text": "Sample text",
             "p_div_locs": [],
             "task_ids": []
        }
        self.uc.corpuses_history = {"corpuses_history": []}
        self.uc.add_corpus(add_corpus)
        self.assertIn(add_corpus, self.uc.corpuses_history["corpuses_history"])

class ParserTests(TestCase):
    def setUp(self):
        self.parser = Parser()
        

    def test_divide_into_paragraphs(self):
        text = "asdf\nzxcvzxcv\n\n345"
        paragraph_delimiters = ["\n"]
        original_text = text
        p_div_locs = [0, 18, len(text)]
        task_ids =  ["task_id_1"]
        paragraphs = []     
        corpus = Corpus(paragraphs, paragraph_delimiters, original_text, p_div_locs, task_ids)
        self.parser.divide_into_paragraphs(corpus)
        self.assertEqual(len(corpus.paragraphs), 7)
        #print("Number of paragraphs:", len(corpus.paragraphs))
        #for idx, paragraph in enumerate(corpus.paragraphs):
            #rint(f"Paragraph {idx + 1}: {paragraph.original_text}")
        
    def test_divide_into_paragraphs_2(self):
        text = "abc\n\n\nefg"
        paragraph_delimiters = ["\n"]
        original_text = text
        p_div_locs = [0, 4, 5, 8, len(text)]
        task_ids =  ["task_id_2"]
        paragraphs = []
        corpus = Corpus(paragraphs, paragraph_delimiters, original_text, p_div_locs, task_ids)
        self.parser.divide_into_paragraphs(corpus)
        self.assertEqual(len(corpus.paragraphs), 7)
        #for idx, paragraph in enumerate(corpus.paragraphs):
            #print(f"Paragraph {idx + 1}: {paragraph.original_text}")
        
    def test_parse_sentence_false(self):
        text = "My name is junsik"
        paragraph = Paragraph(pstate="DIVIDED", original_text=text, is_delimiter=False, tokens=[], token_delimiters="", annotator_info="")
        self.parser.parse_paragraph(paragraph)  
        #print("Tokens:", paragraph.tokens)
        self.assertEqual(len(paragraph.tokens), 7)

    def test_parse_sentence_false_2(self):
        text = "a b c"
        paragraph = Paragraph(pstate="DIVIDED", original_text=text, is_delimiter=False, tokens=[], token_delimiters="", annotator_info="")
        self.parser.parse_paragraph(paragraph)  
        #print("Tokens:", paragraph.tokens)
        self.assertEqual(len(paragraph.tokens), 5) 

class UploadedCorpusHistoryTest(TestCase):
    def setUp(self):
        self.parser = Parser()
        self.uc = UploadedCorpus.objects.create()

    def test_history(self):
        text = "abc\n\n\nefg"
        paragraph_delimiters = ["\n"]
        original_text = text
        p_div_locs = [0, 4, 5, 8, len(text)]
        task_ids =  ["task_id_2"]
        paragraphs = []
        corpus1 = Corpus(paragraphs, paragraph_delimiters, original_text, p_div_locs, task_ids)
        self.parser.divide_into_paragraphs(corpus1)
        self.uc.corpus_init(corpus1)
        
        text = "asdf\nzxcvzxcv\n\n345"
        paragraph_delimiters = ["\n"]
        original_text = text
        p_div_locs = [0, 4, 5, 8, len(text)]
        task_ids =  ["task_id_2"]
        paragraphs = []
        corpus2 = Corpus(paragraphs, paragraph_delimiters, original_text, p_div_locs, task_ids)
        self.parser.divide_into_paragraphs(corpus2)
        self.uc.add_corpus(corpus2)
        
        text = "a b c"
        paragraph = Paragraph(pstate="DIVIDED", original_text=text, is_delimiter=False, tokens=[], token_delimiters="", annotator_info="")
        self.parser.parse_paragraph(paragraph)  
        paragraphs=[paragraph]  
        paragraph_delimiters=["\n"] 
        original_text=text
        p_div_locs=[0, len(text)]  
        task_ids=["task_id_3"]
        corpus3 = Corpus(paragraphs, paragraph_delimiters, original_text, p_div_locs, task_ids)
        self.uc.add_corpus(corpus3)

        text = "My name is junsik"
        paragraph = Paragraph(pstate="DIVIDED", original_text=text, is_delimiter=False, tokens=[], token_delimiters="", annotator_info="")
        self.parser.parse_paragraph(paragraph)
        paragraphs = [paragraph]
        paragraph_delimiters = ["\n"]
        original_text = text
        p_div_locs = [0, len(text)]
        task_ids = ["task_id_4"]
        corpus4 = Corpus(paragraphs, paragraph_delimiters, original_text, p_div_locs, task_ids)
        self.uc.add_corpus(corpus4)
        corpuses_history = self.uc.corpuses_history

        self.assertEqual(corpuses_history['corpuses_history'][0]['original_text'], "abc\n\n\nefg")
        self.assertEqual(corpuses_history['corpuses_history'][1]['original_text'], "asdf\nzxcvzxcv\n\n345")
        self.assertEqual(corpuses_history['corpuses_history'][2]['original_text'], "a b c")
        self.assertEqual(corpuses_history['corpuses_history'][3]['original_text'], "My name is junsik")
        

                