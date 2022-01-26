// Get data from xml file for showcase builder
function data_request_showcase(filename) {
    var datarequest = new XMLHttpRequest();
    datarequest.open("GET", "data/"+filename+".xml", false);
    datarequest.send();
    var xml = datarequest.responseXML;
    var dataamount = xml.getElementsByTagName('data');
    var nametags = new Array;
    var imglocs = new Array;
    for(var i=0; i<dataamount.lenght; i++) {
        var databracket = dataamount[i];
        nametags[i] = databracket.getElementsByTagName('nametag');
        imglocs[i] = databracket.getElementsByTagName('imgloc');
    }
    showcase_constructor(imglocs, nametags, dataamount.lenght);
}