var mysql = require('./database');

var reloadTable = function(res,string) {
console.log(string[0]+string[1]);
  if(string[1] === '1'){
var choice = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme FROM ustanove,podaci,kzn, ocijena WHERE SLOBODNI_TERMIN > NOW() AND ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+string[0]+"' ORDER BY SLOBODNI_TERMIN ASC limit 10";
}else if(string[1]==='2'){
  var choice = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme FROM ustanove,podaci,kzn, ocijena WHERE  ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID AND kzn.IME='"+string[0]+"' AND KONTAKT_ADRESA LIKE '%"+string[3]+"%' ORDER BY SLOBODNI_TERMIN ASC limit 10";
}
else if(string[1]==='3') {
      if (string[2]==='4') {
        var choice = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme FROM ustanove,podaci,kzn, ocijena WHERE ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+string[0]+"' ORDER BY UKUPNO_ZADOVOLJSTVO DESC limit 10";
      }
      else if (string[2]==='5'){
        var choice = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme FROM ustanove,podaci,kzn, ocijena WHERE ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+string[0]+"' ORDER BY PROFESIONALNOST_OSOBLJA DESC limit 10";
      }
      else {
        var choice = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme FROM ustanove,podaci,kzn, ocijena WHERE ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+string[0]+"' ORDER BY KVALITETA_PROSTORA DESC limit 10";
      }
}

  mysql.sendQuery(choice, function(rows,fields)
  {
    console.log(rows);
    res.render('index',{scrapped:rows});
  });
};

var loadtable = function(res) {
  mysql.sendQuery("SELECT *, if(KONTAKT_EMAIL is null, '-', KONTAKT_EMAIL) AS KONTAKT_EMAIL2, if(KONTAKT_TELEFON is null, '-', KONTAKT_TELEFON) AS KONTAKT_TELEFON2, DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme FROM mydb.ustanove, mydb.podaci, ocijena WHERE SLOBODNI_TERMIN > NOW() AND mydb.ustanove.USTANOVA_ID=mydb.podaci.USTANOVA_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID limit 20",
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
