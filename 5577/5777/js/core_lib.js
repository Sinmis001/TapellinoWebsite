// Title text fix
function title_fix() {
    let divtitle = document.querySelector('.title-text');
    let imgheight = document.querySelector('.title-background').offsetHeight;
    divtitle.style="height:"+imgheight+"px";
}

// Update on resize so it always has correct height
window.addEventListener('resize', title_fix);

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
    title_fix();
    setTimeout(remove_unwanted_scripts(), 10);
    menusdiscovery();
}

document.onload = webbuilder();