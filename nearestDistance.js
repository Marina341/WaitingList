var _ = require('underscore')

var rad = function(x) {return x*Math.PI/180;}
var nearestDistance = function(res, address, markers){
    var lat = address.lat;
    var lng = address.lng;
    var R = 6371; // radius of earth in km
    var distances = [];
    var allDistances = [];
    var closestArray = [];
    var closest = -1;
    for( i=0;i<markers.length; i++ ) {
        var mlat = markers[i].LAT;
        var mlng = markers[i].LNG;
        var dLat  = rad(mlat - lat);
        var dLong = rad(mlng - lng);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        distances[i] = d;
        allDistances.push({
            ind: i,
            dist: d,
            mlat
        });
        /*console.log();
        if ( closest == -1 || d < distances[closest] ) {
            closest = i;
            closestArray.push(i);
        }*/
    }
    allDistances = _.sortBy( allDistances, 'dist' ).slice(0,10);
    
    /*markers.forEach(function(element){
        if (element.mlat == 
    });*/
    allDistances.forEach(function(elem){
        markers.forEach(function(mark){
            if (elem.mlat == mark.LAT) {
                closestArray.push(mark);
            };
        });
    });
    
    let scrapped = JSON.stringify(closestArray);
    res.send({scrapped});
}

module.exports = {
    nearestDistance: nearestDistance
};