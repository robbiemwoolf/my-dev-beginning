const express = require('express');
const morgan = require('morgan');

const app = express();

const sayHello = (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const content = name ? `Hello, ${name}!` : 'Hello!';
    res.send(content);
};

app.use(morgan("dev"));
app.get('/hello', sayHello);

module.exports = app;