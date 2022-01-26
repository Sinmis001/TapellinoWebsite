// Get data from xml file for showcase builder
function data_request_showcase(filename) {
    var datarequest = new XMLHttpRequest();
    datarequest.open("GET", "data/"+filename+".xml", false);
    datarequest.send();
    var xml = datarequest.responseXML;
    var dataamount = xml.getElementsByTagName('data');
    var nametags = new Array;
    var imglocs = new Array;
    var i=0;
    while(i<dataamount.lenght) {
        var databracket = dataamount[i];
        nametags[i] = databracket.getElementsByTagName('nametag');
        imglocs[i] = databracket.getElementsByTagName('imgloc');
        i++
    }
    showcase_constructor(imglocs, nametags, dataamount.lenght);
}