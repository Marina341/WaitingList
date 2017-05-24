var mysql = require('./database');




var reloadTable = function(res,string) {
console.log(string[0]+string[1]);
  if(string[0] === 'ja'){
var choice = 'SELECT * FROM mydb.ustanove limit 10';
}else if(string[0]==='naziv'){
  var choice = 'SELECT NAZIV FROM mydb.ustanove limit 10';


}
else{
  var choice = 'SELECT * FROM mydb.ustanove';
}




  mysql.sendQuery(choice, function(rows,fields)
  {

    res.render('index',{scrapped:rows});
  });


};


var loadtable = function(res) {




  mysql.sendQuery('SELECT * FROM mydb.ustanove', function(rows,fields)
  {


    res.render('index',{scrapped:rows});
  });

};

module.exports = {
  reloadTable: reloadTable,
  loadtable:loadtable
};
