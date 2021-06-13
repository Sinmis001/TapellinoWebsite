
// Necessery Global Variables

const divporte = document.createElement("div");
const divpse = document.createElement("div");
const PMi = document.createElement("i");

const divpsr = document.createElement("div");
const divportr = document.createElement("div");
const CCFDiv = document.createElement("div");
const divlogocont = document.createElement("div");

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
    divlogocont.setAttribute("id", "logo_container");
    navparent.appendChild(divlogocont);

    const alogo = document.createElement("a");
    alogo.setAttribute("href", "https://www.tapellino.com");
    divlogocont.appendChild(alogo);

    const imglogo = document.createElement("img");
    imglogo.setAttribute("id", "logo");
    imglogo.setAttribute("src", "images/tapellino.png");
    imglogo.setAttribute("alt", "Tapellino Signs");
    alogo.appendChild(imglogo);
}

function navig(navparent) {
    // Core Nav Divs Maker
    const NCFDiv = document.createElement("div");
    NCFDiv.setAttribute("id", "NCF");
    navparent.appendChild(NCFDiv);

    CCFDiv.setAttribute("id", "CCF");
    NCFDiv.appendChild(CCFDiv);

    // Nav Elements

    // Home Element
    const divhome = document.createElement("div");
    divhome.setAttribute("class", "navobj");
    CCFDiv.appendChild(divhome);

    const ahome = document.createElement("a");
    ahome.setAttribute("href", "https://www.tapellino.com");
    ahome.setAttribute("class", "active");
    const texthome = document.createTextNode("Home");
    ahome.appendChild(texthome);
    divhome.appendChild(ahome);

    // Products / Services Element
    const divps = document.createElement("div");
    divps.setAttribute("class", "nctab");
    CCFDiv.appendChild(divps);

    divpse.setAttribute("class", "nct ncategory");
    divps.appendChild(divpse);
    
    const divpst = document.createElement("div");
    divpst.setAttribute("class", "ncategory");
    divpse.appendChild(divpst);

    const pps = document.createElement("p");
    const ppst = document.createTextNode("Products / Services");
    pps.appendChild(ppst);
    divpst.appendChild(pps);

    const divpsarr = document.createElement("div");
    divpsarr.setAttribute("class", "arrow down");
    divpst.appendChild(divpsarr);

    divpsr.setAttribute("class", "flex-navig");
    divps.appendChild(divpsr);

    const anamelist = ['Exterior Signs', 'Interior Signs', '3D Signs', 'Illuminated Signs', 'Banners', 'Stickers', 'Digital Printing', 'Laser Cutting', 'Acrylic Fabrication'];
    const alinklist = ['esigns', 'isigns', '3dsigns', 'ilsigns', 'dprinting#banners', 'stickers', 'dprinting', 'lasercut', 'acrylicfab'];
    const pnamelist = ['Signs', 'Other'];
    
    listmaker(divpsr, anamelist, alinklist, pnamelist);

    // Portfolio  Element
    const divport = document.createElement("div");
    divport.setAttribute("class", "nctab");
    CCFDiv.appendChild(divport);

    divporte.setAttribute("class", "nct ncategory");
    divport.appendChild(divporte);
    
    const divportt = document.createElement("div");
    divportt.setAttribute("class", "ncategory");
    divporte.appendChild(divportt);

    const portp = document.createElement("p");
    const portt = document.createTextNode("Portfolio");
    portp.appendChild(portt);
    divportt.appendChild(portp);

    const divportarr = document.createElement("div");
    divportarr.setAttribute("class", "arrow down");
    divportt.appendChild(divportarr);

    divportr.setAttribute("class", "flex-navig");
    divport.appendChild(divportr);

    // Contact Element
    const divcontact = document.createElement("div");
    divcontact.setAttribute("class", "navobj");
    CCFDiv.appendChild(divcontact);

    const acontact = document.createElement("a");
    acontact.setAttribute("href", "contact");
    const textcontact = document.createTextNode("Contact");
    acontact.appendChild(textcontact);
    divcontact.appendChild(acontact);

    // Phone Menu Maker
    PMi.setAttribute("class", "fa fa-bars nav-phone");
    NCFDiv.appendChild(PMi);

    const elelist = [ahome, acontact];
    const linkerlist = ['home', 'contact', 'linkylist'];
    const listlinkerlist = ['esigns', 'isigns', '3dsigns', 'ilsigns', 'dprinting#banners', 'stickers', 'dprinting', 'lasercut', 'acrylicfab'];
    activepagehandler(elelist, linkerlist, listlinkerlist);

}

function listmaker(parelement, listname, listlink, plistname) {
    var lnum, llnum=0, amake, atext, pmake, ptext;
    for(lnum=0; lnum<listlink.length; lnum++) {
        if(lnum==0 || lnum==5) {
            pmake = document.createElement("p");
            pmake.setAttribute("class", "nav-header");
            ptext = document.createTextNode(plistname[llnum]);
            pmake.appendChild(ptext);
            parelement.appendChild(pmake);
            llnum++;
        } else {
            amake = document.createElement("a");
            amake.setAttribute("href", listlink[lnum]);
            atext = document.createTextNode(listname[lnum]);
            amake.appendChild(atext);
            parelement.appendChild(amake);
        }
    }
}

function activepagehandler(elementlist, linkestlist, listlinkestlist) {
    const url = window.location.pathname.split('#')[0].split('/5577/5777/');
    var lnum, llnum;
    for(lnum=0; lnum<linkestlist.length; lnum++) {
        if(linkestlist[lnum]=='linkylist') {
            for(llnum=0; llnum<listlinkestlist.length; llnum++) {
                if(url[1]==listlinkestlist[llnum]) {
                    var activea = document.querySelector("a["+listlinkestlist[llnum]+"]");
                    activea.setAttribute("class", "active");
                    elementlist[0].removeAttribute("class");
                    break;
                }
            }
        }
        if(url[1]==linkestlist[lnum]) {
            elementlist[lnum].setAttribute("class", "active");
            elementlist[0].removeAttribute("class");
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
    widemaker(finfodiv, namelist, linklist);
    
    // website maker wait that's me!
    const webmdiv = document.createElement("div");
    webmdiv.setAttribute("id", "webmaker");
    footerid.appendChild(webmdiv);

    const webmp = document.createElement("p");
    const webmptext = document.createTextNode("Made by SinmisDev");
    webmp.appendChild(webmptext);
    webmdiv.appendChild(webmp);
}

function widemaker(parelement, listname, listlink) {
    var lnum, amake, atext;
    for(lnum=0; lnum<listlink.length; lnum++) {
        amake = document.createElement("a");
        amake.setAttribute("href", listlink[lnum]);
        atext = document.createTextNode(listname[lnum]);
        amake.appendChild(atext);
        parelement.appendChild(amake);
    }
}

function initalizer() {
    navloader();
    footerconstructor();
}

document.body.onload = initalizer;