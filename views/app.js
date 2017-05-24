//var logic = require('./logic');
var logic = require('./logic');
var db = require('./database');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(express.static('./assets'));
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({extended:false});


app.post('/',urlencodedParser, function(req, res) {

 var inputi=[req.body.item, req.body.item1]
  logic.reloadTable(res,inputi);

});
app.get('/', function(req, res) {


  logic.loadtable(res);

});













app.listen(8080);
console.log('Connected at localhost:8080');
