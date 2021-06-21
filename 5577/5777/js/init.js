
// Necessery Global Variables

const divporte = document.createElement("div");
const divpse = document.createElement("div");
const PMi = document.createElement("i");

const divpsr = document.createElement("div");
const divportr = document.createElement("div");
const CCFDiv = document.createElement("div");
const divlogocont = document.createElement("div");

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
    const csslinks = ['fontsinit.css', 'core.css', 'navigcore.css', 'footcore.css', 'colorpallet.css'];
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
    const NCFDiv = document.createElement("div");
    NCFDiv.setAttribute("id", "NCF");
    navparent.appendChild(NCFDiv);

    CCFDiv.setAttribute("id", "CCF");
    NCFDiv.appendChild(CCFDiv);

    // The things that people use to go around the webspace 

    // Home Element
    var ahome = document.createElement("a");
    var hometext = "Home";
    var homelink = "https://www.tapellino.com";
    ahandler(CCFDiv, hometext, homelink, ahome);

    // Products / Services Element
    var pstext = "Products / Services";
    listhandler(CCFDiv, pstext, divpse, divpsr);

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
    listhandler(CCFDiv, porttext, divporte, divportr);

    // Contact Element
    var acontact = document.createElement("a");
    var contacttext = "Contact";
    var contactlink = "contact";
    if(typedoca || typedocb) {
        contactlink="../contact";
    }
    ahandler(CCFDiv, contacttext, contactlink, acontact);
    
    // Phone Menu Maker
    PMi.setAttribute("class", "fa fa-bars nav-phone");
    NCFDiv.appendChild(PMi);

    const elelist = [ahome, acontact];
    const linkerlist = ['home', 'contact', 'linkylist'];
    const listlinkerlist = ['esigns', 'isigns', '3dsigns', 'ilsigns', 'stickers', 'dprinting#banners', 'dprinting', 'lasercut', 'acrylicfab'];
    activepagehandler(elelist, linkerlist, listlinkerlist);

}

function ahandler(parelement, elementtext, elementlink, aelement) {
    var atext, divmaker;
    divmaker = document.createElement("div");
    divmaker.setAttribute("class", "navobj");

    aelement.setAttribute("href", elementlink);
    atext = document.createTextNode(elementtext);

    aelement.appendChild(atext);
    divmaker.appendChild(aelement);
    parelement.appendChild(divmaker);
}

function listhandler(parelement, elementtext, identifier1, identifier2) {
    var topdiv = document.createElement("div");
    topdiv.setAttribute("class", "nctab");
    parelement.appendChild(topdiv);

    identifier1.setAttribute("class", "nct ncategory");
    topdiv.appendChild(identifier1);
    
    var textdiv = document.createElement("div");
    textdiv.setAttribute("class", "ncategory");
    identifier1.appendChild(textdiv);

    var pelement = document.createElement("p");
    var ptext = document.createTextNode(elementtext);
    pelement.appendChild(ptext);
    textdiv.appendChild(pelement);

    var arrowdiv = document.createElement("div");
    arrowdiv.setAttribute("class", "arrow down");
    textdiv.appendChild(arrowdiv);

    identifier2.setAttribute("class", "flex-navig");
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
    listlinkestlist
    const url = window.location.pathname.split('#')[0].split('/5577/5777/')
    var lnum, llnum, validator=0;
    for(lnum=0; lnum<linkestlist.length; lnum++) {
        if(linkestlist[lnum]=='linkylist') {
            for(llnum=0; llnum<listlinkestlist.length; llnum++) {
                if(url[1]=="products&services/"+listlinkestlist[llnum]) {
                    var activea = document.querySelector("a[href='"+listlinkestlist[llnum]+"']");
                    activea.setAttribute("class", "active");
                    break;
                } else if(url[1]=="portfolio/"+listlinkestlist[llnum]) {
                    var activea = document.querySelector("a[href='"+listlinkestlist[llnum]+"']");
                    activea.setAttribute("class", "active");
                    break;
                } else if(llnum == linkestlist.length-1){
                    validator++;
                }
            }
        }
        if(url[1]==linkestlist[lnum] && linkestlist[lnum] != 'linkylist' ) {
            elementlist[lnum].setAttribute("class", "active");
            break;
        }
        validator=lnum;
        if(validator==1) {
            elementlist[0].setAttribute("class", "active");
            break;
        }
    }
}

// Nav event handler for onclick events and mouseenter and on events

var tabporte = divporte;
var tabprode = divpse;
var phonemenu = PMi;

var tabprodr = divpsr;
var tabportr = divportr;
var phonemenur = CCFDiv;
var mobilecombatlogo = divlogocont;

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




// Footer constructor

function footerconstructor() {
    const footerid = document.getElementById("footerid");
    
    // Location Handler
    var typedoca = document.getElementById("outdocps");
    var typedocb = document.getElementById("outdocpo");

    // copyrights
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
    const webmptext = document.createTextNode("Made by SinmisDev");
    webmp.appendChild(webmptext);
    webmdiv.appendChild(webmp);
}

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

function errorcatcher(functionchecker) {
    try {
        functionchecker();
    }
    catch(error) {
        console.error(error);
    }

}

function initalizer() {
    errorcatcher(navloader);
    errorcatcher(footerconstructor);
    errorcatcher(headerassembler);
}

document.body.onload = initalizer;