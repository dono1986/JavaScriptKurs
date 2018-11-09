"use strict";

console.log("index loaded");

jQuery(document).ready(function($) {
    console.log("document ready");

    let form = $(".new-entry");

    $(form).on('submit', function(event) {
        console.log("Submitted!");
        event.preventDefault();
    
        let title = $("#title").val();
        let content = $("#content").val();
        
        console.log("Title: " + title + " " + "Content: " + content);

        $.ajax({
            url: "entry/new",
            method: "POST",
            data: { title: title, 
                    content: content},
            success: function(data) {
                let div = $.parseHTML("<div></div>");

                $(div).html(data);

                let newEntries = $(".gbentry", div);

                $('#entry-area .gbentry').remove();
                $('#entry-area').append(newEntries);

            }
        });

    });
});



/*
jQuery(document).on('load', function($) {

    console.log("window loaded!");
    let form = $(".new-entry");

    $(form).on('submit', function(event) {
        console.log("Submitted!");
        event.preventDefault();
        alert("what?");
    });



});*/