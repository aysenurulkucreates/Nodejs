const express = require('express');

const app = express();

app.use('/users', (req, res) => {
    console.log('Second Middleware!');
    res.send('<h1>Hello from my first express.js example!</h1>');
});

app.use('/', (req, res) => {
    console.log('First Middleware!');
    res.send('<h1>Welcome to Homepage!</h1>');
});


app.listen(3000);