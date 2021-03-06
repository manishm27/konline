var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression());
app.use(express.static('./'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});