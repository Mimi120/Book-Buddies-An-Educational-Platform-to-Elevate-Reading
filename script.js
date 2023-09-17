const express = require('express');
const fs = require('fs');
const openai = require('openai');

const app = express();
const port = 3000; // Adjust the port as needed

// Set up OpenAI API

let userText = null;
const API_KEY = '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'; // Paste your API key here



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
