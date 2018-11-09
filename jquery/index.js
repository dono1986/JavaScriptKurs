"use strict";

jQuery(document).ready(function($) {

    // Zugriff auf ALLE "p" Elemente. Es wird KEINE Schleife benötigt
    $("p.absatz")
    .css("color", "green")
    .css("background-color", "red");

    // Zugriff auf ALLE "p" Elemente mit der Klasse "absatz"
    $("p.absatz")
    .css("color", "green")
    .css("background-color", "red");



    /*
    let elements = document.querySelectorAll("p.absatz");
    for (let element of elements) {
        element.style.color = "green";
        element.style.backgroundColor = "red";
    }
    */

    // Alle "p" Elemente mit den Klassen "absatz" und "super" erhalten einen Click-Handler.
    // "This" verweist auf das Element, das angeklickt wurde
    $("p.absatz.super").click(function() { 
        console.log(this);
        $(this).css("background-color", "blue");
    });

    // Manche Handler erwarten auch mehrere Handler (Hover = Maus betritt und verlässt Element)
    $("p.absatz.super").hover(
        function() { 
            $(this).css("background-color", "yellow");
        }, function() {
            $(this).css("background-color", "red");
        }
    );


    
});