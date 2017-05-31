var logic = require('./logic');
var db = require('./database');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.static('./assets'));
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.post('/',urlencodedParser, function(req, res) {
 var inputi=[req.body.item, req.body.item1, req.body.item2]
  logic.reloadTable(res,inputi);
});

app.get('/', function(req, res) {
  logic.loadtable(res);
});
/*
app.get('/', function(req, res) {
  res.render('index');
}); */

var data=[];
app.get('/search',function(req,res){
    var query = 'select mydb.kzn.ime from mydb.kzn where mydb.kzn.ime like "%'+req.query.key+'%"';
    db.connection.query(query, function(err, rows, fields) {
    	  if (err) throw err;
        for(i=0;i<rows.length;i++)
          {
            data.push(rows[i].ime);
          }
          res.end(JSON.stringify(data));
    });
    console.log(data);
});

app.listen(8080);
console.log('Connected at localhost:8080');
