var logic = require('./logic');
var db = require('./database');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/assets/js'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
/* app.use(bodyParser.json()); */

app.post('/', function(req, res) {
  console.log(" SERVER POST")
  var inputi=[req.body.item, req.body.item1, req.body.item2];
  console.log(inputi)
  logic.reloadTable(res,inputi);
});
/*
app.get('/', function(req, res) {
  logic.loadtable(res);
}); */

app.get('/', function(req, res){
  res.render('index');
});

app.get('/search',function(req,res){
    db.connection.query('SELECT mydb.kzn.ime from mydb.kzn where mydb.kzn.ime like "%'+req.query.key+'%"',
    function(err, rows, fields) {
        if (err) throw err;
        var data=[];
        for(var i=0;i<rows.length;i++) {
          data.push(rows[i].ime);
        }
          console.log(data);
          res.send(data);
    });
});

app.listen(8080);
console.log('Connected at localhost:8080');
