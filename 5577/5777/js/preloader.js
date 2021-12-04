// Load scripts
function scriptloader() {
    let scripts = ['js/nav_builder.js', 'js/foot_builder.js', 'js/core_lib.js', 'js/scrollbar.js'];
    for(let i=0; i<scripts.length; i++) {
        let scriptele = document.createElement("script");
        scriptele.src = ""+scripts[i]+"";
        document.body.appendChild(scriptele);
        
    }
}

document.body.onload = scriptloader();