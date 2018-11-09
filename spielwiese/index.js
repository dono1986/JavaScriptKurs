"use strict";

let start = Date.now();

//let counter = 0;
let element = document.getElementById("test");


for(let x=0; x<1000000; x++) {
    //counter = x;

    element.innerHTML = x;

}

let ende = Date.now();


console.log(ende-start);
