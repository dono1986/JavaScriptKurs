"use strict";

window.addEventListener("load", function() {

    //Suche Element mit der gewünschten Attribut-Wert Kombination
   let myElement = document.querySelector("[moep='wahnsinn']");

   let newButton = document.createElement("button");
   newButton.innerText ="Click me!";
   
    myElement.appendChild(newButton);

}, false); 