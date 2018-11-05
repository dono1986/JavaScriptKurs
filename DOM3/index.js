"use strict";

window.addEventListener("load", function() {

    let button = this.document.getElementById("that-button");
    let heading = this.document.getElementById("that-heading");

    button.addEventListener("click", function() {
        heading.innerText = "Hey!";

        //Direktes Styling
        heading.style.border = "3px solid";

        //Entferne Klasse "standard" und füge "special" hinzu
        heading.classList.remove("standard");
        heading.classList.add("special");

    });

});