var browswidth = window.innerWidth;
var imgdiv = document.getElementById('previousjob');

function imghandler() {
    var imgsource, alttext="One of our previous jobs";
    imgsource = rngimgsel();
    const imgele = document.createElement('img');
    imgele.setAttribute("src", imgsource);
    imgele.setAttribute("alt", alttext);
    imgdiv.appendChild(imgele);
}

function rngimgsel() {
    var imgpaths = [
        /* Exterior Signs */ 
        ["portfolio/images/exteriorsigns/ex1.jpg", "portfolio/images/exteriorsigns/ex2.jpg", "portfolio/images/exteriorsigns/ex3.jpg", "portfolio/images/exteriorsigns/ex4.jpg", "portfolio/images/exteriorsigns/ex5.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg"],
        /* Interior Signs */ 
        ["portfolio/images/interiorsigns/in1.jpg", "portfolio/images/interiorsigns/in2.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg"],
        /* 3D Signs */ 
        ["portfolio/images/3dsigns/3d1.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg",],
        /* Illuminated Signs */ 
        ["portfolio/images/illuminatedisngs/ill1.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg", "images/welcomeheader.jpg"]
    ];
    var selimg, rngfamily, rngpic;
    rngfamily = rnggen(4);
    rngpic = rnggen(4);
    rngskipfirst = rnggen(2);
    switch(rngfamily) {
        case 0:
            if(rngskipfirst==0){
                selimg = imgpaths[rngfamily][rngpic];
            } else {
                selimg = imgpaths[rngfamily][rngpic+4];
            }
            break;
        case 1:
            if(rngskipfirst==0){
                selimg = imgpaths[rngfamily][rngpic];
            } else {
                selimg = imgpaths[rngfamily][rngpic+4];
            }
            break;
        case 2:
            if(rngskipfirst==0){
                selimg = imgpaths[rngfamily][rngpic];
            } else {
                selimg = imgpaths[rngfamily][rngpic+4];
            }
            break;
        case 3:
            if(rngskipfirst==0){
                selimg = imgpaths[rngfamily][rngpic];
            } else {
                selimg = imgpaths[rngfamily][rngpic+4];
            }
            break;
    }
    return selimg;
}

function rnggen(max) {
    return Math.floor(Math.random()*max);
}

imghandler();
