var tabprode = document.getElementById("ntprode");
var tabporte = document.getElementById("ntporte");
var phonemenu = document.getElementById("phone-opener");

var tabprodr = document.getElementById('ntprodr');
var tabportr = document.getElementById('ntportr');
var phonemenur = document.getElementById('CCF');
var mobilecombatlogo = document.getElementById('logo_container');

tabprode.addEventListener('mouseenter', menuhandler(tabprodr, tabprode));
tabporte.addEventListener('mouseenter', menuhandler(tabportr, tabporte));

function menuhandler(object, listener) {
    listener.addEventListener('mouseenter', e => {
        object.setAttribute("class", "flex-navig triggered");
        object.addEventListener('mouseenter', a => {
            object.setAttribute("class", "flex-navig triggered");
        });
    });
    listener.addEventListener('mouseleave', e => {
        object.setAttribute("class", "flex-navig ");
        object.addEventListener('mouseleave', a => {
            object.setAttribute("class", "flex-navig ");
        });
    });
}

var statustpd=0;
tabprode.onclick = s => {
    if(statustpd == 0) {
        tabprodr.setAttribute("class", "flex-navig triggered");
        statustpd=1;
    } else {
        tabprodr.setAttribute("class", "flex-navig ");
        statustpd=0;
    }
}

var statustpt=0;
tabporte.onclick = x => {
    if(statustpt == 0) {
        tabportr.setAttribute("class", "flex-navig triggered");
        statustpt=1;
    } else {
        tabportr.setAttribute("class", "flex-navig ");
        statustpt=0;
    }
}

var status=0;
phonemenu.onclick = z => {
    if(status==0) {
        phonemenur.setAttribute("class", "poked");
        mobilecombatlogo.setAttribute("style", "display:none;");
        status=1;
    } else {
        phonemenur.setAttribute("class", "");
        mobilecombatlogo.setAttribute("style", "");
        status=0;
    }
};
