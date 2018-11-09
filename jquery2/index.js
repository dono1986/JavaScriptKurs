"use strict";

jQuery(document).ready(function($) {

    // Ebenfalls Zugriff auf ALLE "p" Elemente. Enthält eine Referenz auf 
    //das aktuelle Element des Schleifendurchgangs und eine Zählervariable
    $("p").each(function(i, element) {
        if(i%2==0) {
            $(element).css("background-color", "green");
        } else {
            $(element).css("background-color", "red");
        }
    });
    
});