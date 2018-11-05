"use strict";

window.addEventListener("load", function() {

    // Holt Überschrift mit der Id "heading" ab
    let heading = this.document.getElementById("heading");
    heading.innerText = "Miau";

    // Holt alle Element ab, die der Klasse "my-button" angehören
    let button = this.document.getElementsByClassName("my-button");
    this.console.log(button.innerText);

    // Holt alle H3-Überschriften ab
    let h3s = this.document.getElementsByTagName("h3");
    this.console.log(h3s);

});