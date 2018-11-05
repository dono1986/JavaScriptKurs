"use strict";

window.addEventListener("load", function() {

    let content = document.getElementById("box__content");
    content.addEventListener("click", function() {
       let newElement = document.createElement("p");
       newElement.innerText = "Hallo Welt";

       content.appendChild(newElement);
    }, false);

}, false); 