function scrollbarhandler() {
    var scrollbarwidth = window.innerWidth - document.documentElement.clientWidth;
    var coreelements = [document.querySelector("#mainid"), document.querySelector("#headerid"), document.querySelector("#footerid")];
    var lnum;
    for(lnum=0; lnum<coreelements.length; lnum++) {
        coreelements[lnum].style = "margin-right: "+scrollbarwidth+"px;";
    } 
}

var bodyhasscrollbar = function() {
    return window.innerHeight < document.body.scrollHeight;
}

function checkforscrollbarandact() {
    if(bodyhasscrollbar()==true) {
        scrollbarhandler();
    }
}

// Just in case the user decides he will resize or move the page to a smaller or bigger screen
window.addEventListener('resize', checkforscrollbarandact);