nav_constructor('nav');

// User locator for indication where the user is on the webspace
function activepagehandler(elementlinklist) {
    const url = window.location.pathname.split('#')[0].split('/5577/5777/')
    let lnum, validator=0;
    for(lnum=0; lnum<elementlinklist.length; lnum++) {
        if(url[lnum]==elementlinklist[lnum]) {
            let activea = document.querySelector("a[href='"+elementlinklist[lnum]+"']");
            activea.classList.add("active");
            return 0;
        } else if(lnum == elementlinklist.length-1) {validator=1}
        if(validator==1) {
            let activea = document.querySelectorAll("a[href='"+elementlinklist[0]+"']");
            activea[1].classList.add("active");
            return 0;
        }
    }
}

// Menu Accesser
var cstatus = 0;
var cpstatus = 0;

function menusdiscovery() {
    menus = document.querySelectorAll('.menu');
    mobmenu = document.querySelector('.mobile-menu');
    // Products / Services Menu
    // Desktop
    menus[1].addEventListener('mouseenter', accessed);
    menus[1].addEventListener('mouseleave', leftmenu);

    // Touch Screen
    menus[1].addEventListener('click', cpmenu);

    // Mobile Compatibility
    // Touch Screen
    mobmenu.addEventListener('click', cmenu);
}

// Hover effects
function accessed() {
    this.classList.add("accessed");
    var e = this.querySelector('ul');
    heightoful(e);
}

function leftmenu() {
    this.classList.remove("accessed");
    var e = this.querySelector('ul');
    removeheight(e);
}

// Click effects
function cmenu() {
    var mobnav = document.querySelector('#nav-bar');
    if(cstatus===0) {
        mobnav.classList.add("accessed");
        this.classList.add("accessed");
        cstatus=1;
    } else {
        mobnav.classList.remove("accessed");
        this.classList.remove("accessed");
        cstatus=0;
    }
}

function cpmenu() {
    if(cpstatus===0) {
        this.classList.add("accessed");
        var e = this.querySelector('ul');
        heightoful(e);
        cpstatus=1;
    } else {
        this.classList.remove("accessed");
        var e = this.querySelector('ul');
        removeheight(e);
        cpstatus=0;
    }
}


// Support for browsers that have issues with calc on height like firefox 
function heightoful(ulele) {
    var ecount = ulele.querySelectorAll('li').length;
    var heightperele = ulele.querySelector('li').offsetHeight;
    ulele.style = "height: "+heightperele*ecount+"px";
}

function removeheight(ulele) {
    ulele.style = "height: 0";
}

// Find menus & show active
const nav_elements = ['https://www.tapellino.com', 'contact', 'signage',  'exterior-signs', 'interior-signs', '3d-signs', 'illuminated-signs', 'other-services', 'stickers', 'digital-printing#banners', 'digital-printing', 'laser-cutting', 'acrylic-fabrication'];
setTimeout(() => {
    activepagehandler(nav_elements);
    menusdiscovery();
}, 15);