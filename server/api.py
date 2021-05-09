import json

import numpy as np
import uvicorn
from fastapi import Body, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.preprocessing.text import one_hot

from NewsApi import get_news
from Transformers import T5_Summarizer
from nlp_operations import clean_text

summarizer = T5_Summarizer()


class NumpyEncoder(json.JSONEncoder):
    """ Special json encoder for numpy types """

    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)


app = FastAPI()

origins = [
    "*",
    "http://localhost:8080",
]

# CORS origins allowed
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

voc_size = 5000
sent_length = 20


def get_text_to_vect(text):
    onehot_repr = [one_hot(words, voc_size) for words in text]

    embedded_docs = pad_sequences(onehot_repr,
                                  padding='pre',
                                  maxlen=sent_length)
    return embedded_docs


lstm = load_model('lstm_model_h5.h5')


@app.get('/')
def default():
    return {'user': 'TEAM GUARDIAN'}


@app.post('/predict')
async def get_body(params: dict = Body(...)):
    try:
        message = params['news']
        print("message", message)

        body = clean_text(message)
        print("body:", body)

        vect = get_text_to_vect([body])

        pred = lstm.predict(vect)

        pr_rd = round(pred[0][0])
        pred = json.dumps(pred[0][0], cls=NumpyEncoder)

        summary = summarizer.summarize(message)
        print(f"Summary: {summary}")

        response = {
            'result': pred,
            'rd_result': pr_rd,
            'summary': summary
        }
        return response

    except Exception as err:
        print("Something else went wrong", err)
        return err


@app.post('/resources')
async def get_body(params: dict = Body(...)):
    try:
        summary = params['summary']
        print("summary", summary)

        summary = summary.split(' ')

        summary = '&'.join(summary)

        resources = get_news(summary)

        response = {
            "resources": resources
        }
        return response

    except Exception as err:
        print("Something else went wrong", err)
        return err


uvicorn.run(app)
