import requests

API_KEY = "981060d694f149858f979ea02debe829"


def get_news(keywords):
    url = ('https://newsapi.org/v2/sources?'
           f'q={keywords}'
           'from=2021-05-08&'
           'sources=bbc-news&'
           'country=in'
           'sortBy=popularity&'
           f'apiKey={API_KEY}')

    response = requests.get(url)

    print(response.json())
    return response.json()
