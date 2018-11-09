"use strict";

jQuery(document).ready(function($) {

    $(".myButtonStyle").click(function(event) {

        //Verhindert das normale Verhalten (Link wird bei Klick nicht verfolgt)
        event.preventDefault();

        // Gibt die angesteuerte Adresse aus
        console.log($(this).attr("href"));

        $(this).css("background-color", "green");


    });
    
});