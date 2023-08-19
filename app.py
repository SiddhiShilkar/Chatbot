from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route('/sentiment', methods=['POST'])
def get_sentiment():
    data = request.json
    user_message = data['user_message']

    blob = TextBlob(user_message)
    sentiment = 'positive' if blob.sentiment.polarity > 0 else 'negative' if blob.sentiment.polarity < 0 else 'neutral'

    return jsonify({'sentiment': sentiment})

from waitress import serve
serve(app, host='0.0.0.0', port=5000)

