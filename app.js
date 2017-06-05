var logic = require('./logic');
var db = require('./database');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/assets/js'));
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({extended:false});
app.post('/',urlencodedParser, function(req, res) {
  console.log(" SERVER POST")
  //var ocjene=[req.body.ustanovaInp,req.body.zahvatInp,req.body.spol,req.body.age,req.body.rating_input_1,req.body.rating_input_2,req.body.rating_input_3];
  var inputi=[req.body.item, req.body.item1, req.body.item2,req.body.item3];
  console.log(inputi);
//  console.log(ocjene);
  logic.reloadTable(res,inputi);
  //  logic.rateIt(res,ocjene);

});
app.post('/rate',urlencodedParser, function(req, res) {
  console.log(" SERVER POST")
  var ocjene=[req.body.ustanovaInp,req.body.zahvatInp,req.body.rating_input_1,req.body.rating_input_2,req.body.rating_input_3,req.body.spol,req.body.age,];
console.log(ocjene);
 logic.rateIt(res,ocjene);
});

app.post('/pregledstanja',urlencodedParser, function(req, res) {
  console.log(" SERVER POST")
  var input=[req.body.itemstanje];
  console.log(input)
  logic.stanje(res,input);
});

app.get('/', function(req, res){
  res.render('index');
});

app.get('/search',function(req,res){
    db.connection.query('SELECT kzn.ime from kzn where kzn.ime like "%'+req.query.key+'%"',
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

app.get('/searchh',function(req,res){
    db.connection.query('SELECT ustanove.naziv from ustanove where ustanove.naziv like "%'+req.query.key+'%"',
    function(err, rows, fields) {
        if (err) throw err;
        var data=[];
        for(var i=0;i<rows.length;i++) {
          data.push(rows[i].naziv);
        }
          console.log(data);
          res.send(data);
    });
});

app.listen(8080);
console.log('Connected at localhost:8080');
