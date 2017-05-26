var mysql = require('./database');

var reloadTable = function(res,string) {
console.log(string[0]+string[1]);
  if(string[1] === '1'){
var choice = 'SELECT * FROM ustanove,podaci,kzn WHERE SLOBODNI_TERMIN > NOW() AND ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ustanove.NAZIV="'+string[0]+'" ORDER BY SLOBODNI_TERMIN ASC limit 10';
}else if(string[1]==='2'){

  var choice = 'SELECT NAZIV FROM mydb.ustanove limit 10';


}
else{
  var choice = 'SELECT * FROM mydb.ustanove';
}




  mysql.sendQuery(choice, function(rows,fields)
  {
console.log(rows);
    res.render('index',{scrapped:rows});
  });


};


var loadtable = function(res) {

  mysql.sendQuery('SELECT * FROM mydb.ustanove, mydb.podaci WHERE mydb.ustanove.USTANOVA_ID=mydb.podaci.USTANOVA_ID limit 20',
    function(rows,fields)
    {
  console.log(rows);
    res.render('index',{scrapped:rows});
    }
  );

};

module.exports = {
  reloadTable: reloadTable,
  loadtable:loadtable
};
