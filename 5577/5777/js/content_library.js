// Produces showcases
function showcase_constructor(piclinks, picheads) {
    const parelement = document.getElementById("showcase-container");
    for(var i=0; i<piclinks.length; i++) {
        // Create content div
        const contentdiv = document.createElement("div");
        contentdiv.setAttribute("class", "content-container");
        
        // image and text for the content div
        const imag = document.createElement("img");
        imag.setAttribute("src", piclinks[i]);
        imag.setAttribute("alt", "Display picture failed to load");
        contentdiv.appendChild(imag);

        const headelement = document.createElement("h1");
        const headtext = document.createTextNode(picheads[i]);
        headelement.appendChild(headtext);
        contentdiv.appendChild(headelement);

        const disclaimertext = document.createElement("p");
        const distext = document.createTextNode("*For pricing and sizes visit our shop ");
        disclaimertext.appendChild(distext);
            const disclaimerlink = document.createElement("a");
            disclaimerlinktext = document.createTextNode("here");
            disclaimerlink.appendChild(disclaimerlinktext);
            disclaimerlink.setAttribute("href", "../contant#location");
            disclaimertext.appendChild(disclaimerlink);
        contentdiv.appendChild(disclaimertext);

        parelement.appendChild(contentdiv);
    }
}
