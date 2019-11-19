
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.redirect(301, 'http://localhost:4201/third');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

