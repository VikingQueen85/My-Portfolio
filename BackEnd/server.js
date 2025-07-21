
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// API route for contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact form submission received:
        Name: ${name}
        Email: ${email}
        Message: ${message}`);

    res.status(200).json({ message: 'Message received (backend placeholder).' });
});

// All other GET requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});