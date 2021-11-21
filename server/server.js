const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get('/api', (req, res) => {
    res.json({message: 'Hello from the server!'});
});