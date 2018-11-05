"use strict";

window.addEventListener("load", function() {

    let heading = document.getElementById("box__heading");
    heading.addEventListener("click", function() {
        let content = document.getElementById("box__content");
        content.classList.toggle("hide");

        let indicator = document.getElementById("box__indicator");
        indicator.classList.toggle("hidden");

    }, false);

}, false); 