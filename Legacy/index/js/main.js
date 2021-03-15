/* This is the begging of the Menu.js javascript file */
/*This is the begging of the myNav Function */
function myNav() {
        var nav = document.getElementById("myTopnav");
        if (nav.className === "topnav") {
            nav.className += " responsive";
        } else {
            nav.className = "topnav";
        }

    }
    /* This is the begging of the mySticks javascript function [Formerly] */
/* function mySticks() {
    var stick = document.getElementById('MySticksId');
    if (stick === 'mystick') {
        stick += ' response';
    } else {
        stick = 'mystick';
    }

} */
/* This is the begging of the HeadAnimation javascript function */
function HeadAnimation() {
	var HA = document.getElementById('notblur');
	setTimeout(function(){document.getElementById('notblur').style.display = "none";},
	5000);
}
