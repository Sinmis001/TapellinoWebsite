// Load CSS
function cssloader() {
    var parelement = document.querySelector("head");
    const csslinks = ['fontsinit.css', 'main_stylesheet.css', 'nav_style.css', 'footer_style.css'];
    for(var lnum=0; lnum<csslinks.length; lnum++) {
        linkmaker = document.createElement("link");
        linkmaker.setAttribute("href", "css/"+csslinks[lnum]);
        linkmaker.setAttribute("rel", "stylesheet");
        parelement.appendChild(linkmaker);
    }
}

// Load scripts
function scriptloader() {
    let scripts = ['nav_builder.js', 'foot_builder.js', 'scrollbar.js', 'core_lib.js'];
    for(let i=0; i<scripts.length; i++) {
        let scriptele = document.createElement("script");
        scriptele.src = "js/"+scripts[i];
        document.body.appendChild(scriptele);
        
    }
}

function essentialfire() {
    // Load css and obtain necessary scripts
    cssloader();
    scriptloader();
}

document.body.onload = essentialfire();