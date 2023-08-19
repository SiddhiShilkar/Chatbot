# Chatbot

The Chatbot is a user-friendly interface that allows users to interact with a virtual chatbot. 
The chatbot responds to user inputs by using predefined rules and sentiment analysis. 
Built using a combination of HTML, CSS, JavaScript, and Python technologies, the application provides an engaging and dynamic conversation experience.
The Chatbot Web Application is a fun and interactive way to experience the capabilities of natural language processing and rule-based responses. 
Whether you want to have a casual conversation or explore sentiment analysis, the chatbot is here to assist you!

## Installation

1. Clone this repository to your local machine.

2. In terminal, Navigate to the project directory

3. Create a virtual environment (optional but recommended):
python -m venv venv
source venv/bin/activate (on macOS/Linux)
venv\Scripts\activate (on Windows)

4. Install required Python packages:
pip install -r requirements.txt

5. Start the Flask development server: python app.py
   
6. Open your web browser and visit http://localhost:5000 to interact with the chatbot.

## Usage

Enter Your Message: Type your message into the chat input area provided on the web page.
Send: Click the "Send" button to submit your message to the chatbot.
Receive Responses: The chatbot will process your message and respond accordingly. 
It can provide greetings, answer queries, or engage in casual conversation.
Sentiment Analysis: The chatbot's responses are tailored based on sentiment analysis. 
It can detect whether your message conveys positivity or negativity and respond accordingly.
Engage with Predefined Rules: The chatbot also follows predefined rules to respond to common greetings, inquiries, and other messages.

## Technologies Used

- HTML, CSS, JavaScript: Front-end technologies for creating the user interface and interactions in the web application.
- Flask: A Python web framework used to develop the server-side logic and handle HTTP requests.
- TextBlob: A Python library for natural language processing (NLP), used for sentiment analysis of user messages.
- Gunicorn or Waitress: Python WSGI HTTP server options for deploying the Flask application.
- PythonShell (from the python-shell package): A library to run Python code from Node.js.

## Features

- User-friendly chatbot interface
- Predefined rule-based responses
- Sentiment analysis for personalized responses
- Easy setup and installation


