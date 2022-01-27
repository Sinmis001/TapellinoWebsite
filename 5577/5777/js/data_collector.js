// Get data from xml file for showcase builder
function data_request_showcase(filename) {
    var datarequest = new XMLHttpRequest();
    datarequest.open("GET", "data/"+filename+".xml", false);
    datarequest.send();
    var xml = datarequest.responseXML;
    var dataamount = xml.getElementsByTagName('data');
    var nametags = [[],[],[]];
    var imglocs = [[],[],[]];

    // Normal tile count
    var normaltilecount = xml.querySelector('normaltile').getElementsByTagName('data');

    // Wide tile count
    var widetilecount = xml.querySelector('widetile').getElementsByTagName('data');

    // Long tile count
    var longtilecount = xml.querySelector('longtile').getElementsByTagName('data');

    for(var e=0; e<normaltilecount.length; e++) {
        var databracket = dataamount[e];
        nametags[0][e] = datareceiver(databracket, 'nametag');
        imglocs[0][e] = datareceiver(databracket, 'imgloc');
    }
    
    for(var e=0; e<widetilecount.length; e++) {
        var databracket = dataamount[e+normaltilecount.length];
        nametags[1][e] = datareceiver(databracket, 'nametag');
        imglocs[1][e] = datareceiver(databracket, 'imgloc');
    }

    for(var e=0; e<longtilecount.length; e++) {
        var databracket = dataamount[e+normaltilecount.length+widetilecount.length];
        nametags[2][e] = datareceiver(databracket, 'nametag');
        imglocs[2][e] = datareceiver(databracket, 'imgloc');
    }

    showcase_constructor(imglocs, nametags, dataamount.length);
}

function datareceiver(databracket, tagname) {
    return databracket.getElementsByTagName(tagname).item(0).innerHTML;
}