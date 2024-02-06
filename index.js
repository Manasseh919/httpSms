const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // or any other port you prefer

const apiKey = "WLpI5EHgMDzCGKRPnmrFEP7F4DDQwZnx5oXlxw8038RelKLW9-25uxFJ9QMCO9b"; // Replace with your actual API key

app.use(bodyParser.json());

app.post('/https://api.httpsms.com/v1/messages/send', (req, res) => {
    // Authenticate the request using the provided API key
    const providedApiKey = req.headers['x-api-key'];

    if (!providedApiKey || providedApiKey !== apiKey) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

   
    const smsContent = req.body.content;
    const senderNumber = req.body.from;
    const recipientNumber = req.body.to;

    

    // Example: Log the received data
    console.log(`Received SMS request - Content: ${smsContent}, From: ${senderNumber}, To: ${recipientNumber}`);

  
    res.json({ success: true ,});
    console.log("successful")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});