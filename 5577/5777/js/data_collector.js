// Get data from xml file for showcase builder
function data_request_showcase(filename) {
    var xml = xmlcall(filename);
    var dataamount = xml.querySelectorAll('data');
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

// Get data for landing page
function lander_construction(filename) {
    var xml = xmlcall(filename);
    var datalist = xml.querySelectorAll('data');
}

function nav_constructor(filename) {
    var xml = xmlcall(filename);
    var nav = xml.querySelector('nav').innerHTML;
    var headertag = document.querySelector('header');
    headertag.innerHTML += nav;
}

function footer_constructor(filename) {
    var xml = xmlcall(filename);
    var footer = xml.querySelector('footer').innerHTML;
    var footertag = document.querySelector('footer');
    footertag.innerHTML += footer;
}

function css_constructor(filename) {
    var xml = xmlcall(filename);
    var css_content = xml.querySelector('css').innerHTML;
    var headtag = document.querySelector('head');
    headtag.innerHTML += css_content;
}

// Call XML
function xmlcall(filename) {
    var datarequest = new XMLHttpRequest();
    datarequest.open("GET", "data/"+filename+".xml", false);
    datarequest.send();
    return datarequest.responseXML;
}

// Retrieve data from specific tags
function datareceiver(databracket, tagname) {
    return databracket.getElementsByTagName(tagname).item(0).innerHTML;
}