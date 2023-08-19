import sys
from textblob import TextBlob

# Read Python code from stdin
python_code = sys.stdin.read()

# Execute the Python code
blob = TextBlob(python_code)
sentiment = blob.sentiment.polarity

# Output sentiment score
print(sentiment)
