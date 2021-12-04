// Functions that deserve the right to remain

// // Dark - Light mode maker function
// function dark_light_constructor(parelement, input) {
//     var label, slider, input;
//     label = document.createElement("label");
//     label.setAttribute("class", "switch_container");

//     input.setAttribute("type", "checkbox");

//     slider = document.createElement("span");
//     slider.setAttribute("class", "slider");
    
//     label.appendChild(input);
//     label.appendChild(slider);
//     parelement.appendChild(label);
// }

// // Dark - Light mode click checker
// dl.addEventListener("click", () => {
//     document.body.classList.toggle('dark');
// });

// // Settings maker function
// function settings_constructor(parelement, settingsele, settings) {
//     settingsele.setAttribute("class", "menu_header");
//     parelement.appendChild(settingsele);

//     var settingstextbox = document.createElement("div");
//     settingstextbox.setAttribute("class", "nct settingscat");
//     settingsele.appendChild(settingstextbox);
    
//     var textdiv = document.createElement("div");
//     textdiv.setAttribute("class", "settingscat");
//     settingstextbox.appendChild(textdiv);

//     var svgele = document.createElement("div");
//     svgele.setAttribute("class", "settings-icon");
//     settingstextbox.appendChild(svgele);

//     settings.setAttribute("class", "menu_content_container");
//     settingsele.appendChild(settings);

//     // Dark - Light mode maker
//     dark_light_constructor(settings, dl);
    
// }