// Some scripts are required for the page to load but not after it has loaded so we removed them to make the page code cleaner
function remove_unwanted_scripts() {
    let delscriptele = document.getElementsByClassName("delonload");
    let delscriptelenum = delscriptele.length;
    for(let i=0; i<delscriptelenum; i++) {
        delscriptele[0].remove();
    }
}


// Web Builder for simulating server-side construction

function webbuilder() {
    // Construct navigation and footer
    errorcatcher(nav_builder);
    errorcatcher(footerconstructor);
    
    // Check for scrollbar and deal with it, remove scripts so they don't appear in inspector and discover the menus to add clickability and hoverability
    checkforscrollbarandact();
    setTimeout(remove_unwanted_scripts(), 10);
    menusdiscovery();
}

document.onload = webbuilder();