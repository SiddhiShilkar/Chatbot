const { PythonShell } = require('python-shell');

function getBotResponse(userMessage) {
    console.log("User message:", userMessage);
    
    const lowercaseMessage = userMessage.toLowerCase();
    let botResponse = "I'm sorry, I didn't understand that.";

    if (lowercaseMessage.includes("hello") || lowercaseMessage.includes("hi")) {
        console.log("User said hello or hi");
        botResponse = "Hello! How can I assist you today?";
    } else if (lowercaseMessage.includes("how are you")) {
        console.log("User asked how the bot is doing");
        botResponse = "I'm just a bot, but I'm here and ready to help!";
    } else if (lowercaseMessage.includes("bye")) {
        console.log("User said goodbye");
        botResponse = "Goodbye! Have a great day!";
    } else {
        console.log("Performing sentiment analysis...");
        
        // Perform sentiment analysis using TextBlob (Python code)
        const pythonCode = `
            from textblob import TextBlob
            text = "${userMessage.replace(/"/g, '\\"')}"
            blob = TextBlob(text)
            sentiment = blob.sentiment.polarity
            sentiment
        `;

        console.log("Sending Python code:", pythonCode);

        const pythonShell = new PythonShell('python-shell-script.py', { pythonPath: 'python' });

        pythonShell.send(pythonCode);

        pythonShell.on('message', sentimentScore => {
            console.log("Received sentiment score:", sentimentScore);
            sentimentScore = parseFloat(sentimentScore);
            if (sentimentScore > 0) {
                botResponse = "I sense positivity in your message!";
            } else if (sentimentScore < 0) {
                botResponse = "I sense some negativity. Is everything okay?";
            }
        });

        pythonShell.end((err) => {
            if (err) {
                console.error('Python shell error:', err);
            }
        });
    }

    console.log("Bot response:", botResponse);
    return botResponse;
}
