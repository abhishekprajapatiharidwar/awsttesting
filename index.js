const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Backend is Running!');
});


app.get('/aws', (req, res) => {
    res.send('Acsess From AWS Server from Node js program');
});

const PORT = process.env.PORT || 3099;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
