var express = require('express');
var rewrite = require('express-urlrewrite');
var fs = require('fs');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname));

app.listen(app.get('port'), function(){
  console.log('Server listening on http://localhost:' + app.get('port') + ', Ctrl+C to stop');
});
