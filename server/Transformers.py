import torch
from transformers import T5Tokenizer, T5ForConditionalGeneration

model = T5ForConditionalGeneration.from_pretrained('t5-small')
tokenizer = T5Tokenizer.from_pretrained('t5-small')
device = torch.device('cpu')


class T5_Summarizer:
    def __init__(self):
        pass

    def summarize(self, text):
        preprocess_text = text.strip().replace("\n", "")
        t5_prepared_text = "summarize: " + preprocess_text
        tokenized_text = tokenizer.encode(t5_prepared_text, return_tensors="pt").to(device)

        summary_ids = model.generate(tokenized_text,
                                     num_beams=10,
                                     no_repeat_ngram_size=12,
                                     min_length=3,
                                     max_length=40,
                                     early_stopping=True)

        return tokenizer.decode(summary_ids[0], skip_special_tokens=True)