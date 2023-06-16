const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

let i = 0;

// Endpoint to read the file and return its contents
app.get('/api/getValue', (req, res) => {
    console.log('get received, i = ', i++);
    fs.readFile('order.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while reading the file' });
        } else {
            res.json({ status: data, counter: i });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
