
function scrollbarhandler() {
    var scrollbarwidth = window.innerWidth - document.documentElement.clientWidth;
    var coreelements = [document.getElementById("mainid"), document.getElementById("headerid"), document.getElementById("footerid")];
    var lnum;
    for(lnum=0; lnum<coreelements.length; lnum++) {
        coreelements[lnum].setAttribute("style", "margin-right: "+scrollbarwidth+"px;");
    } 
}

var bodyhasscrollbar = function() {
    return window.innerHeight < document.body.scrollHeight;
}

if(bodyhasscrollbar()) {
    scrollbarhandler();
}