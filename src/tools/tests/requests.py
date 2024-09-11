import requests
import json
import math
import time


join_membership = {
    "username": "abc111",
    "email": "abcdefghi12@naver.com",
    "password1": "testaaaaaa!",
    "password2": "testaaaaaa!"
}

response1 = requests.post("http://127.0.0.1:56123/api/v4/rest-auth/registration/",data = join_membership)


login = {
    "username": "abc111",
    "email": "abcdefghi12@naver.com",
    "password": "testaaaaaa!"
}
response2 = requests.post("http://127.0.0.1:56123/api/v4/rest-auth/login/", login) #문제 없음

login_data = response2.json()
token = login_data.get('key')

login_key = {
    'Authorization': f'Token {token}'
}
'''
user_check_response = requests.get("http://127.0.0.1:56123/api/v4/user/check", headers=login_key)
#print(user_check_response.text)
'''
###############################################        data
texts = [
    {
        "original_text": "Die Alpen erstrecken sich über mehrere Länder Europas und bieten spektakuläre Landschaften. Skifahren, Wandern und Klettern sind beliebte Aktivitäten in dieser Region"
    },
    {
        "original_text": "Der Rhein ist einer der längsten Flüsse Europas. Entlang seiner Ufer befinden sich zahlreiche Burgen und Malerische Dörfer, die Touristen aus der ganzen Welt anziehen."
    },
    {
        "original_text": "München, bekannt für das Oktoberfest, ist eine Stadt mit reicher Kultur. Die Altstadt, der Englische Garten und das Schloss Nymphenburg sind beliebte"
    },
    {
        "original_text": "Der Schwarzwald ist ein großes Waldgebiet im Südwesten Deutschlands. Die Region ist berühmt für ihre dichten Wälder, Malerischen Dörfer und die berühmte Kuck"

    },
    {
        "original_text": "Die Insel Rügen ist die größte Insel Deutschlands und liegt in der Ostsee. Sie ist bekannt für ihre weißen Kreidefelsen, die im Nationalpark Jasmund besonders beeindruckend sind"

    },
    {
        "original_text": "Die Wartburg, eine mittelalterliche Burg in Thüringen, ist ein UNESCO-Weltkulturerbe. Hier übersetzte Martin Luther das Neue Testament der Bibel ins Deutsche"
    }
]
##########################################    data

time_list = []

for text in texts:
    upload_response = requests.post("http://127.0.0.1:56123/api/v4/upload", json=text, headers=login_key) 

    corpus_id = upload_response.json()
    get_id = corpus_id.get('corpus_id')

    divide_data = {
        "corpus_id" : get_id,
        "divide_options": json.dumps({
            "p_delims": ["\n"]  
        })
    }
    divide_response = requests.post("http://127.0.0.1:56123/api/v4/parser/divide",  json = divide_data, headers=login_key)

    parse_data = {
        "corpus_id" : get_id,
        "parse_options": json.dumps({
            "t_delims": " \t\n\r\u000b\f" 
        })  
    }
    parse_response = requests.post("http://127.0.0.1:56123/api/v4/parser/parse",  json = parse_data, headers=login_key)
    
    start = time.time()
    
    annotate_data = {
        "corpus_id" : get_id,
        "annotate_options" : json.dumps({
            "lang_from": "German",
            "lang_to":"English",
            "annotator_name": "chatgpt_ft0",
            
            })
    }
    annotate_response = requests.post("http://127.0.0.1:56123/api/v4/annotator/annotate", json = annotate_data, headers= login_key)
    math.factorial(100000)
    end = time.time()
    print(f"{end - start:.5f} sec")
    time_list.append(end - start)



corpuses_respons = requests.get(f"http://127.0.0.1:56123/api/v4/corpuses/", headers = login_key)
corpuse_history = corpuses_respons.json()

Unknown_count = 0
token_sum = 0
#number = int(get_id) -1
num = int(get_id) 
for number in range (num):
    Unknown_count = 0
    token_sum = 0
    for corpus_record in corpuse_history[number]['corpuses_history']:
        for paragraph in corpus_record['paragraphs']:
            if paragraph['pstate'] == "ANNOTATED":
                for token in paragraph.get('tokens', []):
                    if not token['is_delimiter']: 
                        token_sum  += 1
                        if token.get('gloss') == "!UNKNOWN":  
                            Unknown_count += 1
                            print(token)
    Return_rate = ((token_sum-Unknown_count)/token_sum) * 100
    print(number , "time:",round(float(time_list[number]), 2),", return_rate:", round(Return_rate, 2))
    







