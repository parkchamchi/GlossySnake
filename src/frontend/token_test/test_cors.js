// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/token', (req, res) => {
    res.json({ token: 'Token-Value' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
