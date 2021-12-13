// Showcase function maker
function showcase_constructor(piclinks, picheads, num, disclaimer) {
    const parelement = document.querySelectorAll(".showcase-container");
    var truearrlenght = piclinks[0].length;

    // Validation incase there are no wide or long pictures
    if(typeof piclinks[1] != 'undefined') {
        truearrlenght += piclinks[1].length;
    } else if(typeof piclinks[2] != 'undefined') {
        truearrlenght += piclinks[2].length;
    }
    
    var arrprogress=0, warrprogress=0, larrprogress=0;

    for(let i=0; i<truearrlenght; i+=0) {
        
        // Create content div
        let contentdiv = document.createElement("div");
        
        // Skip default
        var skip=false;

        // Random picture order to make it look cool
        var rngnum;
        var imag = document.createElement("img");
        var headelement = document.createElement("h1");
        var headtext;

        rngnum = rnggen(3);
        var texttotran;
        var imgtotran;

        // What image this time
        if(rngnum == 2 && typeof piclinks[2] != 'undefined' && larrprogress<piclinks[2].length) {
            imgtotran = piclinks[2][larrprogress];
            texttotran = picheads[2][larrprogress];
            contentdiv.setAttribute("class", "content-container long-tile");
            larrprogress+=1;
            i++;
            skip=true;
        } else if(rngnum == 1 && typeof piclinks[1] != 'undefined' && warrprogress<piclinks[1].length) {
            imgtotran =  piclinks[1][warrprogress];
            texttotran = picheads[1][warrprogress];
            contentdiv.setAttribute("class", "content-container wide-tile");
            warrprogress+=1;
            i++;
            skip=true;
        } else if(rngnum == 0 || rngnum == 1 || rngnum == 2 && skip!= true) {
            imgtotran = piclinks[0][arrprogress];
            texttotran = picheads[0][arrprogress];
            contentdiv.setAttribute("class", "content-container normal-tile");
            arrprogress+=1;
            i++;
        }

        imag.setAttribute("src", imgtotran);
        imag.setAttribute("alt", "Display picture failed to load");
        contentdiv.appendChild(imag);
        
        
        headtext = document.createTextNode(texttotran);
        headelement.appendChild(headtext);
        contentdiv.appendChild(headelement);

        // In the rare occurance that a div with undefined content shows up clear it
        if(imgtotran == undefined || texttotran == undefined) {
            // Clear undefined div for a clean user experience
            contentdiv.remove();
            console.warn = () => {};
        } else {
            parelement[num].appendChild(contentdiv);
        }
    }

    // Disclaimer Text if i say so
    if(disclaimer==true) {
        let topparent = document.getElementsByClassName("catalog-container");
        let disclaimertext = document.createElement("h4");
        let distext = document.createTextNode("*For pricing and sizes visit our shop ");
        disclaimertext.appendChild(distext);
            let disclaimerlink = document.createElement("a");
            disclaimerlinktext = document.createTextNode("here");
            disclaimerlink.appendChild(disclaimerlinktext);
            disclaimerlink.setAttribute("href", "../contact#location");
            disclaimertext.appendChild(disclaimerlink);
        topparent[num].appendChild(disclaimertext);
    }
}

// Random Number Generator
function rnggen(max) {
    return Math.floor(Math.random()*max);
}