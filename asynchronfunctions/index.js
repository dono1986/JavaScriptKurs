"use strict";

/*let counter=0;

function f2() {
    console.log(counter++);
}

//setTimeout(f2, 5000);

setInterval(f2, 1000);*/

window.addEventListener("load", function() {

    document.getElementById("click-me").
            addEventListener("click", 
                            function() { 
                                console.log("Button clicked!"); 
                            },
                            false);

});


