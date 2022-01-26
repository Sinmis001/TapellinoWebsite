// Get data from xml file for showcase builder
function data_request_showcase(filename) {
    var datarequest = new XMLHttpRequest();
    datarequest.open("GET", "5577/5777/data/"+filename+".xml", true);
    datarequest.send();
    var xml = datarequest.responseXML;
    var dataamount = xml.getElementsByTagName('data');
    var nametags;
    var imglocs
    for(let i=0; i<dataamount.lenght; i++) {
        let databracket = dataamount[i];
        nametags[i] = databracket.getElementsByTagName('nametag');
        imglocs[i] = databracket.getElementsByTagName('imglocs');
    }
    showcase_constructor(imglocs, nametags, dataamount.lenght);
}