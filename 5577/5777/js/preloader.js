// Load scripts
function scriptloader() {
    let scripts = ['nav_handler.js', 'core_lib.js'/*, 'simple-scrollbar.min.js'*/];
    for(let i=0; i<scripts.length; i++) {
        let scriptele = document.createElement("script");
        scriptele.src = "js/"+scripts[i];
        document.body.appendChild(scriptele);
        
    }
}

function essentialfire() {
    // Load css and obtain necessary scripts
    css_constructor('css')
    scriptloader();
}

document.body.onload = essentialfire();