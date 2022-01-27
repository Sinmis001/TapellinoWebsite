// Title text fix
function title_fix() {
    if(document.querySelector('.title-text') != null || document.querySelector('.title-text') != undefined) {
        let divtitle = document.querySelector('.title-text');
        let imgheight = document.querySelector('.title-background').offsetHeight;
        divtitle.style="height:"+imgheight+"px";
    }
}

// Update on resize so it always has correct height
window.addEventListener('resize', title_fix);

// Some scripts are required for the page to load but not after it has loaded so we removed them to make the page code cleaner
function remove_unwanted_scripts() {
    let delscriptele = document.getElementsByClassName("delonload");
    let delscriptelenum = delscriptele.length;
    for(let i=0; i<delscriptelenum; i++) {
        delscriptele[0].remove();
    }
}

// Scrollbar functions
function scrollbarhandler() {
    var scrollbarwidth = window.innerWidth - document.documentElement.clientWidth;
    var coreelements = [document.querySelector('main'), document.querySelector('header'), document.querySelector('footer')];
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

// Web Builder for simulating server-side construction
function webbuilder() {
    setTimeout(()=> { 
    // Construct navigation and footer
    errorcatcher(nav_builder);
    errorcatcher(footerconstructor);
    
    // Check for scrollbar and deal with it, remove scripts so they don't appear in inspector and discover the menus to add clickability and hoverability
    errorcatcher(checkforscrollbarandact);
    title_fix();
    setTimeout(remove_unwanted_scripts(), 10);
    menusdiscovery();
    }, 1);
}

document.onload = webbuilder();