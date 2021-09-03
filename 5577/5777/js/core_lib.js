
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
    // Location Handler
    var typedoca = document.getElementById("outdocps");
    var typedocb = document.getElementById("outdocpo");

    // CSS Loader
    var headerboy;
    if(document.getElementById("headerhandler") != null) {
        headerboy = document.getElementById("headerhandler");
    } else if(document.getElementById("outdocps") != null) {
        headerboy = document.getElementById("outdocps")
    } else {
        headerboy = document.getElementById("outdocpo");
    }
    const csslinks = ['fontsinit.css', 'main_stylesheet.css', 'navig_foot_lib.css', 'colorpallet.css', 'menu_lib.css'];
    var locationdiscovery = 'css/';
    if(typedoca || typedocb) {
        locationdiscovery = '../css/';
    }
    csslinkhandler(headerboy, csslinks, locationdiscovery);

    const outsourcedlinks = ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'];
    var locationdiscoverynone = '';
    csslinkhandler(headerboy, outsourcedlinks, locationdiscoverynone);
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

// Nav constructor

function navloader() {
    const headerelement = document.getElementById("headerid");
    const navelement = document.createElement("nav");
    headerelement.appendChild(navelement); 
    
    // Logo Creator Renderer
    logocontainer(navelement);
    // Main Navigation Part
    navig(navelement);
}

function logocontainer(navparent) {
    var typedoca = document.getElementById("outdocps");
    var typedocb = document.getElementById("outdocpo");

    var logolocation = "images/tapellino.png";
    if(typedoca || typedocb) {
        logolocation="../images/tapellino.png";
    }
    divlogocont.setAttribute("id", "logo_container");
    navparent.appendChild(divlogocont);

    const alogo = document.createElement("a");
    alogo.setAttribute("href", "https://www.tapellino.com");
    divlogocont.appendChild(alogo);

    const imglogo = document.createElement("img");
    imglogo.setAttribute("id", "logo");
    imglogo.setAttribute("src", logolocation);
    imglogo.setAttribute("alt", "Tapellino Signs");
    alogo.appendChild(imglogo);
}

function navig(navparent) {
    // Location Handler
    var typedoca = document.getElementById("outdocps");
    var typedocb = document.getElementById("outdocpo");
    var subfold="";
    if(typedoca || typedocb) {
        subfold="../";
    }

    // Core Nav Divs Maker
    const Upper_Nav_ContainerDiv = document.createElement("div");
    Upper_Nav_ContainerDiv.setAttribute("id", "Upper_Nav_Container");
    navparent.appendChild(Upper_Nav_ContainerDiv);

    Lower_Nav_ContainerDiv.setAttribute("id", "Lower_Nav_Container");
    Upper_Nav_ContainerDiv.appendChild(Lower_Nav_ContainerDiv);

    // The things that people use to go around the webspace 

    // Home Element
    var ahome = document.createElement("a");
    var hometext = "Home";
    var homelink = "https://www.tapellino.com";
    amaker(Lower_Nav_ContainerDiv, hometext, homelink, ahome);

    // Products / Services Element
    var pstext = "Products / Services";
    listheadermaker(Lower_Nav_ContainerDiv, pstext, divpse, divpsr, "pas");

    const anamelist = ['Exterior Signs', 'Interior Signs', '3D Signs', 'Illuminated Signs', 'Stickers', 'Banners', 'Digital Printing', 'Laser Cutting', 'Acrylic Fabrication'];
    const alinklist = ['esigns', 'isigns', '3dsigns', 'ilsigns', 'stickers', 'dprinting#banners', 'dprinting', 'lasercut', 'acrylicfab'];
    const pnamelist = ['Signs', 'Other'];
    var foldloc = "products&services/";
    if(typedoca) {
        foldloc = "";
    } else if(typedocb) {
        foldloc = "../products&services/";
    }
    listmaker(divpsr, anamelist, alinklist, pnamelist, foldloc);

    // Portfolio  Element
    var porttext = "Portfolio"
    listheadermaker(Lower_Nav_ContainerDiv, porttext, divporte, divportr, "pf");

    // Contact Element
    var acontact = document.createElement("a");
    var contacttext = "Contact";
    var contactlink = "contact";
    if(typedoca || typedocb) {
        contactlink="../contact";
    }
    amaker(Lower_Nav_ContainerDiv, contacttext, contactlink, acontact);
    
    // Phone Menu Maker
    PMi.setAttribute("class", "fa fa-bars nav-phone");
    Upper_Nav_ContainerDiv.appendChild(PMi);

    // On what page is the user on?
    const elelist = [ahome, acontact];
    const linkerlist = ['home', 'contact', 'linkylist'];
    const listlinkerlist = ['esigns', 'isigns', '3dsigns', 'ilsigns', 'stickers', 'dprinting#banners', 'dprinting', 'lasercut', 'acrylicfab'];
    activepagehandler(elelist, linkerlist, listlinkerlist);


    // Settings maker

    // settings_constructor(Lower_Nav_ContainerDiv, settings, settingseff);
}

// Settings maker function
function settings_constructor(parelement, settingsele, settings) {
    settingsele.setAttribute("class", "menu_header");
    parelement.appendChild(settingsele);

    var settingstextbox = document.createElement("div");
    settingstextbox.setAttribute("class", "nct settingscat");
    settingsele.appendChild(settingstextbox);
    
    var textdiv = document.createElement("div");
    textdiv.setAttribute("class", "settingscat");
    settingstextbox.appendChild(textdiv);

    var svgele = document.createElement("div");
    svgele.setAttribute("class", "settings-icon");
    settingstextbox.appendChild(svgele);

    settings.setAttribute("class", "menu_content_container");
    settingsele.appendChild(settings);

    // Dark - Light mode maker
    dark_light_constructor(settings, dl);
    
}

// Dark - Light mode maker function
function dark_light_constructor(parelement, input) {
    var label, slider, input;
    label = document.createElement("label");
    label.setAttribute("class", "switch_container");

    input.setAttribute("type", "checkbox");

    slider = document.createElement("span");
    slider.setAttribute("class", "slider");
    
    label.appendChild(input);
    label.appendChild(slider);
    parelement.appendChild(label);
}

dl.addEventListener("click", () => {
    document.body.classList.toggle('dark');
});

function amaker(parelement, elementtext, elementlink, aelement) {
    var atext, divmaker;
    divmaker = document.createElement("div");
    divmaker.setAttribute("class", "navobj");

    aelement.setAttribute("href", elementlink);
    atext = document.createTextNode(elementtext);

    aelement.appendChild(atext);
    divmaker.appendChild(aelement);
    parelement.appendChild(divmaker);
}

function listheadermaker(parelement, elementtext, identifier1, identifier2, specclass) {
    var topdiv = document.createElement("div");
    topdiv.setAttribute("class", "menu_header");
    parelement.appendChild(topdiv);

    identifier1.setAttribute("class", "nct ncategory "+specclass);
    topdiv.appendChild(identifier1);
    
    var textdiv = document.createElement("div");
    textdiv.setAttribute("class", "ncategory "+specclass);
    identifier1.appendChild(textdiv);

    var pelement = document.createElement("p");
    var ptext = document.createTextNode(elementtext);
    pelement.appendChild(ptext);
    textdiv.appendChild(pelement);

    var arrowdiv = document.createElement("div");
    arrowdiv.setAttribute("class", "arrow down");
    textdiv.appendChild(arrowdiv);

    identifier2.setAttribute("class", "menu_content_container");
    topdiv.appendChild(identifier2);
}

function listmaker(parelement, listname, listlink, plistname, folderloc) {
    var lnum, llnum=0, amake, atext, pmake, ptext;
    for(lnum=0; lnum<listlink.length; lnum++) {
        if(lnum==0 || lnum==4) {
            pmake = document.createElement("p");
            pmake.setAttribute("class", "nav-header");
            ptext = document.createTextNode(plistname[llnum]);
            pmake.appendChild(ptext);
            parelement.appendChild(pmake);
            llnum++;
        }
        amake = document.createElement("a");
        amake.setAttribute("href", folderloc+listlink[lnum]);
        atext = document.createTextNode(listname[lnum]);
        amake.appendChild(atext);
        parelement.appendChild(amake);
    }
}

function activepagehandler(elementlist, linkestlist, listlinkestlist) {
    const url = window.location.pathname.split('#')[0].split('/5577/5777/')
    var lnum, llnum, validator=0;
    for(lnum=0; lnum<linkestlist.length; lnum++) {
        if(linkestlist[lnum]=='linkylist') {
            for(llnum=0; llnum<listlinkestlist.length; llnum++) {
                if(url[1]=="products&services/"+listlinkestlist[llnum]) {
                    var activea = document.querySelector("a[href='"+listlinkestlist[llnum]+"']");
                    activea.setAttribute("class", "active");
                    return 0;
                } else if(url[1]=="portfolio/"+listlinkestlist[llnum]) {
                    var activea = document.querySelector("a[href='"+listlinkestlist[llnum]+"']");
                    activea.setAttribute("class", "active");
                    return 0;
                } else if(llnum == (linkestlist.length-1)){
                    validator++;
                }
            }
        }
        if(url[1]==linkestlist[lnum] && linkestlist[lnum] != 'linkylist' ) {
            elementlist[lnum].setAttribute("class", "active");
            return 0;
        }
        if(validator==1) {
            elementlist[0].setAttribute("class", "active");
            return 0;
        }
    }
}

// What do i do when someone is going over or clicks on an element that can expand with more options
var tabportclic = divporte;
var tabprodclic = divpse;
var pmclic = PMi;

var tabprodeff = divpsr;
var tabporteff = divportr;
var pmeff = Lower_Nav_ContainerDiv;
var hidelogo = divlogocont;  

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

var status=0;
var firstfire=0;

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

// Footer constructor

function footerconstructor() {
    const footerid = document.getElementById("footerid");
    
    // Where in the website i am located...?
    var typedoca = document.getElementById("outdocps");
    var typedocb = document.getElementById("outdocpo");

    // Copyright section constructor
    const copydiv = document.createElement("div");
    copydiv.setAttribute("id", "copyright");
    footerid.appendChild(copydiv);

    const copydivnormal = document.createElement("div");
    copydivnormal.setAttribute("id", "copynormal");
    copydiv.appendChild(copydivnormal);
    
    const copypnormal = document.createElement("p");
    const copypnormaltext = document.createTextNode("©2021 | Tapellino Signs | All Rights Reserved");
    copypnormal.appendChild(copypnormaltext);
    copydivnormal.appendChild(copypnormal);

    const copydivshort = document.createElement("div");
    copydivshort.setAttribute("id", "copyshort");
    copydiv.appendChild(copydivshort);

    const copypshort = document.createElement("p");
    const copypshorttext = document.createTextNode("©2021 Tapellino Signs");
    copypshort.appendChild(copypshorttext);
    copydivshort.appendChild(copypshort);

    // footer information
    const finfodiv = document.createElement("div");
    finfodiv.setAttribute("id", "finformation");
    footerid.appendChild(finfodiv);

    const namelist = ['Schedule'];
    const linklist = ['contact#schedule'];
    var fold="";
    if(typedoca || typedocb) {
        fold="../";
    }
    widemaker(finfodiv, namelist, linklist, fold);
    
    // website maker wait that's me!
    const webmdiv = document.createElement("div");
    webmdiv.setAttribute("id", "webmaker");
    footerid.appendChild(webmdiv);

    const webmp = document.createElement("p");
    const webmptext = document.createTextNode("Made by CyDCo");
    webmp.appendChild(webmptext);
    webmdiv.appendChild(webmp);
}

// Handler for expanding list elements
function widemaker(parelement, listname, listlink, folderdoc) {
    var lnum, amake, atext;
    for(lnum=0; lnum<listlink.length; lnum++) {
        amake = document.createElement("a");
        amake.setAttribute("href", folderdoc+listlink[lnum]);
        atext = document.createTextNode(listname[lnum]);
        amake.appendChild(atext);
        parelement.appendChild(amake);
    }
}

// Some scripts are required for the page to load but not after it has loaded so we removed them to make the page lighter
function remove_unwanted_scripts() {
    var delscriptele = document.getElementsByClassName("delonload");
    for(var i=0; i<delscriptele.length; i++) {
        delscriptele[i].remove();
    }
}

// Scrollbar window size handler
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

function checkforscrollbarandact() {
    if(bodyhasscrollbar()==true) {
        scrollbarhandler();
    }
}

// Just in case the user decides he will resize or move the page to a smaller or bigger screen
window.addEventListener('resize', checkforscrollbarandact);

// Initializer

function initializer() {
    errorcatcher(headerassembler);
    errorcatcher(navloader);
    errorcatcher(footerconstructor);
    checkforscrollbarandact();
    remove_unwanted_scripts();
}

document.body.onload = initializer;