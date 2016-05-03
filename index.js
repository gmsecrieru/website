var express = require('express');
var app = express();

app.use('/assets', express.static(__dirname + '/dist/assets'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000);
console.log('[server] Listening on 3000');
