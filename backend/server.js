const express = require("express");


const app = express();


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.get('/api/data', (req, res) => {
    res.json({ data: 'This is some API data' });
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

