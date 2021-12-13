
// Necessery Global Variables

const divporte = document.createElement("div");
const divpse = document.createElement("div");
const PMi = document.createElement("i");

const divpsr = document.createElement("div");
const divportr = document.createElement("div");
const Lower_Nav_ContainerDiv = document.createElement("div");
const divlogocont = document.createElement("div");

var dl = document.createElement("input");
var settings = document.createElement("div");
var settingseff = document.createElement("div");

// Header Assembly 

function headerassembler() {

    // CSS Loader
    var headerboy = document.querySelector("head");
    const csslinks = ['fontsinit.css', 'main_stylesheet.css', 'nav_style.css', 'footer_style.css'];
    var locationdiscovery = 'css/';
    csslinkhandler(headerboy, csslinks, locationdiscovery);

    // const outsourcedlinks = ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'];
    // var locationdiscoverynone = '';
    // csslinkhandler(headerboy, outsourcedlinks, locationdiscoverynone);
}

function csslinkhandler(parelement, linkarray, locationhandler) {
    var linkmaker, lnum;
    for(lnum=0; lnum<linkarray.length; lnum++) {
        linkmaker = document.createElement("link");
        linkmaker.setAttribute("href", locationhandler+linkarray[lnum]);
        linkmaker.setAttribute("rel", "stylesheet");
        parelement.appendChild(linkmaker);
    }
}



// What do i do when someone is going over or clicks on an element that can expand with more options
let tabportclic = divporte;
let tabprodclic = divpse;
let pmclic = PMi;

let tabprodeff = divpsr;
let tabporteff = divportr;
let pmeff = Lower_Nav_ContainerDiv;
let hidelogo = divlogocont;  

tabprodclic.addEventListener('mouseenter', menuhandler(tabprodeff, tabprodclic));
tabportclic.addEventListener('mouseenter', menuhandler(tabporteff, tabportclic));

function menuhandler(object, listener) {
    listener.addEventListener('mouseenter', e => {
        object.setAttribute("class", "menu_content_container activated");
        object.addEventListener('mouseenter', a => {
            object.setAttribute("class", "menu_content_container activated");
        });
    });
    listener.addEventListener('mouseleave', e => {
        object.setAttribute("class", "menu_content_container ");
        object.addEventListener('mouseleave', a => {
            object.setAttribute("class", "menu_content_container ");
        });
    });
}

let status=0;
let firstfire=0;

tabprodclic.addEventListener('click', () => {menuonclickeff(null, null, null, tabprodeff, "menu_content_container", "activated", null, null, null)});
tabportclic.addEventListener('click', () => {menuonclickeff(null, null, null, tabporteff, "menu_content_container", "activated", null, null, null)});
pmclic.addEventListener('click', () => {menuonclickeff(null, null, null, pmeff, "", "poked", hidelogo, "", "hide")});
settings.addEventListener('click', () => {menuonclickeff(null, null, null, settingseff, "menu_content_container", "activated", null, null, null)});

// Note: activated displays menu designed for navigation; elevated is for mobile compatibility menu; poked is how mobile compatibility menu get's some of it's properties

function menuonclickeff(clicked, clickedorigclass, clickedaddclass, effected, effectedorigclass, effectedaddclass, effected2, effected2origclass, effected2addclass) {
    if(effected2==null || effected2==undefined) {
        if(clicked==null || clicked==undefined) {
            if(status == 0) {
                effected.setAttribute("class", effectedorigclass+" "+effectedaddclass);
                status=1;
                return 0;
            } else {
                effected.setAttribute("class", effectedorigclass);
                status=0;
                return 0;
            }
        } else {
            if(status == 0) {
                effected.setAttribute("class", effectedorigclass+" "+effectedaddclass);
                clicked.setAttribute("class", clickedorigclass+" "+clickedaddclass);
                status=1;
                console.log(status);
            } else {
                effected.setAttribute("class", effectedorigclass);
                clicked.setAttribute("class", clickedorigclass);
                status=0;
                return 0;
            }
        }
    } else {
        if(clicked==null || clicked==undefined) {
            if(status == 0) {
                effected.setAttribute("class", effectedorigclass+" "+effectedaddclass);
                effected2.setAttribute("class", effected2origclass+" "+effected2addclass);
                status=1;
                return 0;
            } else {
                effected.setAttribute("class", effectedorigclass);
                effected2.setAttribute("class", effected2origclass);
                status=0;
                return 0;
            }
        } else {
                if(status == 0) {
                effected.setAttribute("class", effectedorigclass+" "+effectedaddclass);
                effected2.setAttribute("class", effected2origclass+" "+effected2addclass);
                clicked.setAttribute("class", clickedorigclass+" "+clickedaddclass);
                status=1;
                return 0;
            } else {
                effected.setAttribute("class", effectedorigclass);
                effected2.setAttribute("class", effected2origclass);
                clicked.setAttribute("class", clickedorigclass);
                status=0;
                return 0;
            }
        }
    }
}

// Some scripts are required for the page to load but not after it has loaded so we removed them to make the page code cleaner
function remove_unwanted_scripts() {
    let delscriptele = document.getElementsByClassName("delonload");
    let delscriptelenum = delscriptele.length;
    for(let i=0; i<delscriptelenum; i++) {
        delscriptele[0].remove();
    }
}

// Initializer

function initializer() {
    errorcatcher(headerassembler);
    errorcatcher(nav_builder);
    errorcatcher(footerconstructor);
    checkforscrollbarandact();
    setTimeout(remove_unwanted_scripts(), 10);
    menusdiscovery();
}

document.body.onload = initializer;