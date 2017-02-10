var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/:name', function(req, res) {
    res.sendFile(path.join(__dirname + '/'+req.params.name));
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


