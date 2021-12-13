// Nav Builder
    const parelement = document.getElementById("headerid");
    var elementarr = [[], [], [], []];
    
    function nav_builder () {
        // Creating all of the child elements
        
        // Home & Contact Elements
        var linksforas = ["https://www.tapellino.com", "contact"];
        var aheaders = ["Home", "Contact"]
        link_element_builder(aheaders, linksforas, 0);
        
        // Products / Services Menu
        var linksforprod = ['signage',  'exterior-signs', 'interior-signs', '3d-signs', 'illuminated-signs', 'other-services', 'stickers', 'digital-printing#banners', 'digital-printing', 'laser-cutting', 'acrylic-fabrication'];
        var headersforprod = ['Signage', 'Exterior Signs', 'Interior Signs', '3D Signs', 'Illuminated Signs', 'Other Services', 'Stickers', 'Banners', 'Digital Printing', 'Laser Cutting', 'Acrylic Fabrication'];
        var headerforprod = "Products / Services";
        menu_builder(headerforprod, headersforprod, linksforprod, 0);
        
        // Mobile Menu
        mobilemenu();

        // Logo Element
        logo_builder();
    
        // Creating top element
        var topdiv = document.createElement("div");
        topdiv.id = "nav-bar";
        var mobilediv = document.createElement("div");
        mobilediv.id = "nav-content";
    
        mobilediv.appendChild(elementarr[0][0]);
        mobilediv.appendChild(elementarr[1][0]);
        mobilediv.appendChild(elementarr[0][1]);

        topdiv.appendChild(elementarr[2][0]);
        topdiv.appendChild(elementarr[3][0]);
        topdiv.appendChild(mobilediv);
        parelement.appendChild(topdiv);
    
        // Style those menu headers!
        var headlist = ["signage", "other-services"];
        decorate_menu_headers(headlist);
        
        // Indicator for the user
        const elementlistlinks = ['https://www.tapellino.com', 'contact', 'signage',  'exterior-signs', 'interior-signs', '3d-signs', 'illuminated-signs', 'other-services', 'stickers', 'digital-printing#banners', 'digital-printing', 'laser-cutting', 'acrylic-fabrication'];
        activepagehandler(elementlistlinks);
    }
    
    // Text that the user sees when observing the said element, where does this element take you? What level of access it's on (0 for top meaning it's visible by default and 1 for being part of a menu)
    function link_element_builder (header, links, levelofaccess) {
        // Removal of levels of the site so is easier to access by other people
        for(var i=0; i<links.length; i++) {
            var linkelement = document.createElement('a');
            if(levelofaccess==1) {
                linkelement.href = stringrebuilder(links);
                var atext = document.createTextNode(stringrebuilder(header));
                linkelement.classList.add("nav-menu-element"); 
            } else {
                linkelement.href = links[i];
                var atext = document.createTextNode(header[i]);
                linkelement.classList.add("nav-element");   
            }
            linkelement.appendChild(atext);
            if(levelofaccess == 0) {
                elementarr[levelofaccess][i] = linkelement;
            } else {
                return linkelement;
            }
        }
    }
    
    // Javascript limitation turns rabbit hole string arrays into a limbo unusable state for the builder
    function stringrebuilder(brokenstring) {
        let a = brokenstring.split('');
        return b = a.join('');
    }
    
    // Text that the user sees when observing the said element, Text that the user sees when observing the child link elements, where does this element take you;
    function menu_builder (header, headers, links, idm) {
        // Element Creation
        var headoflist = document.createElement('div');
        var headoftextlist = document.createElement('div');
        var headtextarrow = document.createElement('span');
        var headtext = document.createTextNode(header);
        var arrowtext = document.createTextNode('3');
        
        // Child adoption 
        headtextarrow.classList.add('arrow');
        headtextarrow.appendChild(arrowtext);
        headoftextlist.appendChild(headtext);
        headoftextlist.appendChild(headtextarrow);
        
        // Produce the menu content
        var list_maker = document.createElement('ul');
        for(var i=0; i<links.length; i++) {
            let temphead = headers[i];
            let templink = links[i];
            var lielement = document.createElement('li');
            lielement.appendChild(link_element_builder(temphead, templink, 1));
            list_maker.appendChild(lielement);
        }

        // More child adoption
        headoflist.appendChild(headoftextlist);
        headoflist.appendChild(list_maker);
        headoflist.classList.add("nav-element");
        headoflist.classList.add("menu");
        headoflist.id = idm;
        elementarr[1][0] = headoflist;
    }
    
    // Give some special css styling to the header elements of the menus
    function decorate_menu_headers(headlist) {
        for(var i=0; i<headlist.length; i++) {
            let lilist = document.querySelector("a[href='"+headlist[i]+"']");
            lilist.classList.add("menu-header");
        }
    }

    // Mobile Menu 
    function mobilemenu() {
        var mmele = document.createElement('p');
        var mmeletext = document.createTextNode('a');
        mmele.classList.add('mobile-menu', 'menu');
        mmele.appendChild(mmeletext);
        elementarr[3][0] = mmele;
    }

    // Logo Builder function
    function logo_builder() {
        var logodiv = document.createElement('div');
        var logoa = document.createElement('a');
        var logoimg = document.createElement('img');
    
        logoimg.src="images/tapellino.svg";
        logoimg.alt="Tapellino Signs";
        logoimg.id="logo";
    
        logodiv.id="logo-container";
    
        logoa.href="https://www.tapellino.com";
        
        logoa.appendChild(logoimg);
        logodiv.appendChild(logoa);
        elementarr[2][0] = logodiv;
    }


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
var menus;
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

function accessed() {
    this.classList.add("accessed");
}

function leftmenu() {
    this.classList.remove("accessed");
}

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
        cpstatus=1;
    } else {
        this.classList.remove("accessed");
        cpstatus=0;
    }
}
