// Showcase function maker
function showcase_constructor(piclinks, picheads, truearrlenght) {
    const parelement = document.querySelector(".showcase-container");
    
    var arrprogress=0, warrprogress=0, larrprogress=0;
    for(let i=0; i<truearrlenght; i+=0) {
        
        // Create content div
        let contentdiv = document.createElement("div");
        
        // Skip default
        var skip=false;
        
        // Random picture order to make it look cool
        var rngnum = rnggen(3);
        var imag = document.createElement("img");
        var headelement = document.createElement("h1");
        var headtext;
        var texttotran;
        var imgtotran;
        
        // What image this time
        if(rngnum == 2 && typeof piclinks[2][larrprogress] != 'undefined' && larrprogress<piclinks[2].length) {
            imgtotran = piclinks[2][larrprogress];
            texttotran = picheads[2][larrprogress];
            contentdiv.setAttribute("class", "content-container long-tile");
            larrprogress+=1;
            i++;
            skip=true;
        } else if(rngnum == 1 && typeof piclinks[1][warrprogress] != 'undefined' && warrprogress<piclinks[1].length) {
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
            // Experimental Code needs severe improvements before being used
            // var rngbig = rnggen(25);
            // var rngbig2 = rnggen(rngbig);
            // if(rngbig2 == 1) {
            //     contentdiv.setAttribute("class", "content-container wide-tile long-tile");
            // }
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
            parelement.appendChild(contentdiv);
        }
    }
}

// Random Number Generator
function rnggen(max) {
    return Math.floor(Math.random()*max);
}