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

// Dawn & Dusk Checkbox 
// Default: dusk
const dawnduskcheck = document.querySelector('#dawn_dusk');

function dawndusk() {
    const dusk = document.querySelector('#dusk');
    const dawn = document.querySelector('#dawn');
    if(dawnduskcheck.checked) {
        dawn.style="display:block";
        dusk.style="display:none";
        document.body.classList.add('light');
    } else {
        dawn.style="display:none";
        dusk.style="display:block";
        document.body.classList.remove('light');
    }
}

dawnduskcheck.addEventListener('click', dawndusk);

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
    var coreelements = [document.querySelector('main'), document.querySelector('div[nav]'), document.querySelector('footer')];
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


// Go to top button
function totop() {
    var scrollpos = document.documentElement.scrollTop;
    var posit = scrollpos;
    var i=0;
    animatedloopscroll(posit, scrollpos, i);
}

function animatedloopscroll(posit, scrollpos, i) {    
    var poschang=30;
    setTimeout(() => {
        document.documentElement.scrollTop = posit;
        posit=posit-poschang;
        i+=poschang;
        if(i<scrollpos) {
            animatedloopscroll(posit, scrollpos, i);
        }
    }, 1)
}

function displaytotop() {
    var totopbut = document.querySelector('#gototop');
    if(document.documentElement.scrollTop > 750) {
        totopbut.style.display = "block";
    } else {
        totopbut.style.display = "none";
    }
}

// To display or not to display the thing
window.addEventListener('scroll', displaytotop);

// Web Builder for simulating server-side construction
function webbuilder() {
    setTimeout(()=> {
    // Nav & Footer constructor
    footer_constructor('footer');
    
    // Check for scrollbar and deal with it, remove scripts so they don't appear in inspector and discover the menus to add clickability and hoverability
    errorcatcher(checkforscrollbarandact);
    title_fix();
    setTimeout(remove_unwanted_scripts(), 10);
    }, 1);
}

document.onload = webbuilder();