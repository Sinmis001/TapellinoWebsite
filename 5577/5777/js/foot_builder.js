// Footer constructor

var elementfootarr = [[], []];

function footerconstructor() {
    const footerid = document.getElementById("footerid");

    // Footer information
    const finfodiv = document.createElement("div");
    finfodiv.id = "finformation";

    const namelist = ['Schedule'];
    const linklist = ['contact#schedule'];
    widemaker(namelist, linklist);

    // Footer Text
    var footertextlist = ['©2021 Tapellino Signs', 'Made by SinmisDev'];
    footertext(footertextlist);
    elementfootarr[0][0].id = "copyright";
    elementfootarr[1][0].id = "finformation"
    elementfootarr[0][1].id = "webmaker";

    footerid.appendChild(elementfootarr[0][0]);
    footerid.appendChild(finfodiv);
    finfodiv.appendChild(elementfootarr[1][0]);
    footerid.appendChild(elementfootarr[0][1]);
}

// Text Maker Footer 
function footertext(elementtext) {
    for(var g=0; g<elementtext.length; g++) {
        var textele = document.createElement("p");
        var textforele = document.createTextNode(elementtext[g]);
        textele.appendChild(textforele);
        elementfootarr[0][g] = textele;
    }
}

// Handler for the footer clickable elements
function widemaker(listname, listlink) {
    var amake, atext;
    for(var lnum=0; lnum<listlink.length; lnum++) {
        amake = document.createElement("a");
        amake.href = listlink[lnum];
        atext = document.createTextNode(listname[lnum]);
        amake.appendChild(atext);
        elementfootarr[1][lnum] = amake;
    }
}