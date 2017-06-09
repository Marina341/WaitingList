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

app.get('/naziv',urlencodedParser, function(req, res){

	if (req.query.itemstanje==7){
		console.log("ja sam if");
		console.log(req.query.itemstanje7);

db.connection.query("SELECT DISTINCT *, IF (SLOBODNI_TERMIN, DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.'), '  ') AS datum, IF (SLOBODNI_TERMIN, time_format(SLOBODNI_TERMIN, '%H:%i'), ' ') AS vrijeme FROM mydb.bo WHERE IME= '"+req.query.itemstanje7+"';",

	function(err,rows){
		if(err) throw err
		navivust = [];
		termin = [];
		imence = [];
		terminvr =[];
		for(x in rows){navivust.push(rows[x].NAZIV);termin.push(rows[x].datum);terminvr.push(rows[x].vrijeme);imence.push(rows[x].IME)}
		res.render('pregledstanja',{navivust:navivust,termin:termin,imence:imence, terminvr:terminvr});
	})
	}
	 	 else if (req.query.itemstanje==8){
		console.log("ja sam else if");
		console.log(req.query.itemstanje8);
		db.connection.query("SELECT DISTINCT *, IF (SLOBODNI_TERMIN, DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.'), '  ') AS datum, IF (SLOBODNI_TERMIN, time_format(SLOBODNI_TERMIN, '%H:%i'), ' ') AS vrijeme FROM mydb.bo WHERE TIP_ZAHVATA_ID ='"+req.query.itemstanje8+"'limit 50;",
	function(err,rows){
		if(err) throw err
		navivust = [];
		termin = [];
		imence = [];
		terminvr =[];
		nazivtipa =[];
		for(x in rows){navivust.push(rows[x].NAZIV);termin.push(rows[x].datum);terminvr.push(rows[x].vrijeme);imence.push(rows[x].IME); nazivtipa.push(rows[x].NAZIVTIPA)}
		res.render('pregledstanjapotipu',{navivust:navivust,termin:termin,imence:imence, terminvr:terminvr, nazivtipa:nazivtipa});
			})
		}
	else if (req.query.itemstanje==9){
		console.log("ja sam else if");
		console.log(req.query.itemstanje9);
		db.connection.query("SELECT DISTINCT *, IF (SLOBODNI_TERMIN, DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.'), '  ') AS datum, IF (SLOBODNI_TERMIN, time_format(SLOBODNI_TERMIN, '%H:%i'), ' ') AS vrijeme FROM mydb.bo WHERE NAZIV= '"+req.query.itemstanje9+"';",
	function(err,rows){
		if(err) throw err
		navivust = [];
		termin = [];
		imence = [];
		terminvr =[];
		for(x in rows){navivust.push(rows[x].NAZIV);termin.push(rows[x].datum);terminvr.push(rows[x].vrijeme);imence.push(rows[x].IME)}
		res.render('pregledstanjapoustanovama',{navivust:navivust,termin:termin,imence:imence, terminvr:terminvr});
			})
		}
});
app.get('/', function(req, res){
  res.render('index');
});

app.get('/search-zahvati',function(req,res){
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

app.get('/search-ustanove',function(req,res){
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

app.get('/search-zahvati2',function(req,res){
  app.get('/search-ustanove',function(req,res){
    uinp = req.query.key;
  });
    db.connection.query('select kzn.ime from kzn, podaci, ustanove where kzn.zahvat_id = podaci.zahvat_id and podaci.USTANOVA_ID= ustanove.ustanova_id and ustanove.naziv = "'+req.body.uinp+'" and kzn.ime like "%'+req.query.key+'%"',
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
