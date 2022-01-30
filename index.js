var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Khadar Basha" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello Khadar" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It is working!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
