from Transformers import T5_Summarizer
import pandas as pd

df = pd.read_csv('../cleaned_reviews.csv')
summarizer = T5_Summarizer()

for i in range(10):
    text = df['cleaned_text'][i]
    print(f"Og: {text}")
    summary = summarizer.summarize(text)
    print(f"Summary: {summary}")
    print('\n')