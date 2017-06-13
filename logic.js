var mysql = require('./database');
var alg = require('./nearestDistance');

var reloadTable = function(res,string) {
console.log(string[0]+string[1]);
  if(string[1] === '1'){
var choice = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme, IF(KONTAKT_ADRESA IS NULL,'nije dostupno',KONTAKT_ADRESA) AS KONTAKT_ADRESA2, IF(KONTAKT_TELEFON IS NULL,'nije dostupno',KONTAKT_TELEFON) as KONTAKT_TELEFON2, IF(KONTAKT_EMAIL IS NULL,'nije dostupno',KONTAKT_EMAIL) as KONTAKT_EMAIL2  FROM ustanove,podaci,kzn, ocijena WHERE DATE(SLOBODNI_TERMIN) > '2017-05-01' AND SLOBODNI_TERMIN IS NOT NULL AND ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+string[0]+"' ORDER BY SLOBODNI_TERMIN ASC limit 10";
}else if(string[1]==='2'){

  var choice = "SELECT *,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme, IF(KONTAKT_ADRESA IS NULL,'nije dostupno',KONTAKT_ADRESA) AS KONTAKT_ADRESA2, IF(KONTAKT_TELEFON IS NULL,'nije dostupno',KONTAKT_TELEFON) as KONTAKT_TELEFON2, IF(KONTAKT_EMAIL IS NULL,'nije dostupno',KONTAKT_EMAIL) as KONTAKT_EMAIL2 FROM ustanove,podaci,kzn, ocijena WHERE DATE(SLOBODNI_TERMIN) > '2017-05-01' AND SLOBODNI_TERMIN IS NOT NULL AND ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID AND ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+string[0]+"' AND KONTAKT_ADRESA LIKE '%"+string[3]+"%' ORDER BY SLOBODNI_TERMIN ASC limit 10";
}
else if(string[1]==='3') {
      if (string[2]==='4') {
        var choice = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme, IF(KONTAKT_ADRESA IS NULL,'nije dostupno',KONTAKT_ADRESA) AS KONTAKT_ADRESA2, IF(KONTAKT_TELEFON IS NULL,'nije dostupno',KONTAKT_TELEFON) as KONTAKT_TELEFON2, IF(KONTAKT_EMAIL IS NULL,'nije dostupno',KONTAKT_EMAIL) as KONTAKT_EMAIL2 FROM ustanove,podaci,kzn, ocijena WHERE DATE(SLOBODNI_TERMIN) > '2017-05-01' AND SLOBODNI_TERMIN IS NOT NULL AND ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+string[0]+"' ORDER BY UKUPNO_ZADOVOLJSTVO DESC limit 10";
      }
      else if (string[2]==='5'){
        var choice = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme, IF(KONTAKT_ADRESA IS NULL,'nije dostupno',KONTAKT_ADRESA) AS KONTAKT_ADRESA2, IF(KONTAKT_TELEFON IS NULL,'nije dostupno',KONTAKT_TELEFON) as KONTAKT_TELEFON2, IF(KONTAKT_EMAIL IS NULL,'nije dostupno',KONTAKT_EMAIL) as KONTAKT_EMAIL2 FROM ustanove,podaci,kzn, ocijena WHERE DATE(SLOBODNI_TERMIN) > '2017-05-01' AND SLOBODNI_TERMIN IS NOT NULL AND ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+string[0]+"' ORDER BY PROFESIONALNOST_OSOBLJA DESC limit 10";
      }
      else {
        var choice = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme, IF(KONTAKT_ADRESA IS NULL,'nije dostupno',KONTAKT_ADRESA) AS KONTAKT_ADRESA2, IF(KONTAKT_TELEFON IS NULL,'nije dostupno',KONTAKT_TELEFON) as KONTAKT_TELEFON2, IF(KONTAKT_EMAIL IS NULL,'nije dostupno',KONTAKT_EMAIL) as KONTAKT_EMAIL2 FROM ustanove,podaci,kzn, ocijena WHERE DATE(SLOBODNI_TERMIN) > '2017-05-01' AND SLOBODNI_TERMIN IS NOT NULL AND ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+string[0]+"' ORDER BY KVALITETA_PROSTORA DESC limit 10";
      }
}

  else if(string[1]==='4') {
      if (string[3]!='0') {
        var choice = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme, IF(KONTAKT_ADRESA IS NULL,'nije dostupno',KONTAKT_ADRESA) AS KONTAKT_ADRESA2, IF(KONTAKT_TELEFON IS NULL,'nije dostupno',KONTAKT_TELEFON) as KONTAKT_TELEFON2, IF(KONTAKT_EMAIL IS NULL,'nije dostupno',KONTAKT_EMAIL) as KONTAKT_EMAIL2 FROM ustanove,podaci,kzn, ocijena WHERE DATE(SLOBODNI_TERMIN) > '2017-05-01' AND ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+string[0]+"' ORDER BY UKUPNO_ZADOVOLJSTVO DESC limit 20";
      }
      else {
       	var choice ="SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme, IF(KONTAKT_ADRESA IS NULL,'<nema>',KONTAKT_ADRESA) AS KONTAKT_ADRESA2, IF(KONTAKT_TELEFON IS NULL,'<nema>',KONTAKT_TELEFON) as KONTAKT_TELEFON2, IF(KONTAKT_EMAIL IS NULL,'<nema>',KONTAKT_EMAIL) as KONTAKT_EMAIL2 FROM ustanove,podaci,kzn, ocijena WHERE DATE(SLOBODNI_TERMIN) > '2017-06-15' AND ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID' and kzn.IME='"+string[0]+"' ORDER BY case when SLOBODNI_TERMIN-NOW()<20 THEN SLOBODNI_TERMIN END DESC, case when (UKUPNO_ZADOVOLJSTVO/BROJ_UNOSA)=5 THEN UKUPNO_ZADOVOLJSTVO END DESC, case when SLOBODNI_TERMIN-NOW()<40 THEN SLOBODNI_TERMIN END DESC, case when (UKUPNO_ZADOVOLJSTVO/BROJ_UNOSA)<5 THEN UKUPNO_ZADOVOLJSTVO END DESC;";
	 }
}
 mysql.sendQuery(choice, function(rows,fields)
  {
    let scrapped = JSON.stringify(rows);
    res.send({scrapped});
  });
};

var rateIt = function(res,ocjene){
  console.log(ocjene)
  var query = "SELECT * FROM ustanove , kzn , podaci where ustanove.NAZIV='"+ocjene[0]+"' and kzn.IME='"+ocjene[1]+"' and ustanove.USTANOVA_ID=podaci.USTANOVA_ID and kzn.ZAHVAT_ID=podaci.ZAHVAT_ID";
  mysql.sendQuery(query,function(rows){
  for(var i=0;i<rows.length;i++){
    var ustanovaID = rows[i].USTANOVA_ID;
    var zahvatID = rows[i].ZAHVAT_ID;
  }
  if (ustanovaID === undefined || zahvatID === undefined) res.send("FAIL");

  var query1="insert ignore into ocijena (USTANOVA_ID,ZAHVAT_ID,UKUPNO_ZADOVOLJSTVO,PROFESIONALNOST_OSOBLJA,KVALITETA_PROSTORA,SPOL,DOBNA_SKUPINA,BROJ_UNOSA) VALUES ("+ustanovaID+","+zahvatID+","+ocjene[2]+","+ocjene[3]+","+ocjene[4]+",'"+ocjene[5]+"','"+ocjene[6]+"',1) ON DUPLICATE KEY UPDATE UKUPNO_ZADOVOLJSTVO=UKUPNO_ZADOVOLJSTVO+"+ocjene[2]+",PROFESIONALNOST_OSOBLJA=PROFESIONALNOST_OSOBLJA+"+ocjene[3]+",KVALITETA_PROSTORA=KVALITETA_PROSTORA+"+ocjene[4]+",broj_unosa=broj_unosa +1";

   mysql.sendQuery(query1,function(rows){
      console.log(rows);
      res.send("SUCCESS");
    });
  });
};

var getIt = function(res, zahvat, address){
  console.log(zahvat, address)
  var scrapped;
  var userAddress;
  var NodeGeocoder = require('node-geocoder');
  var options = {
    provider: 'google'
  }
  var geocoder = NodeGeocoder(options);

  // Using callback
  geocoder.geocode(address, function(err, response) {
    if(err) res.send("Adresa nije pronađena");
    userAddress = {
      lat: response[0].latitude,
      lng: response[0].longitude
    };

    var getAllBitches = "SELECT * ,DATE_FORMAT(SLOBODNI_TERMIN, '%d.%m.%Y.') AS datum, time_format(SLOBODNI_TERMIN, '%H:%i') AS vrijeme, IF(KONTAKT_ADRESA IS NULL,'nije dostupno',KONTAKT_ADRESA) AS KONTAKT_ADRESA2, IF(KONTAKT_TELEFON IS NULL,'nije dostupno',KONTAKT_TELEFON) as KONTAKT_TELEFON2, IF(KONTAKT_EMAIL IS NULL,'nije dostupno',KONTAKT_EMAIL) as KONTAKT_EMAIL2  FROM ustanove,podaci,kzn, ocijena WHERE  ustanove.USTANOVA_ID=podaci.USTANOVA_ID AND kzn.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.ZAHVAT_ID=podaci.ZAHVAT_ID and ocijena.USTANOVA_ID = ustanove.USTANOVA_ID and kzn.IME='"+ zahvat +"'";
    mysql.sendQuery(getAllBitches, function(rows){
      //console.log(rows, userAddress)
      alg.nearestDistance(res, userAddress, rows);
    });


  });
};


module.exports = {
  reloadTable: reloadTable,
  rateIt:rateIt,
  getIt:getIt
};
