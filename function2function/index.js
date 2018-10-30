"use strict"

let run = function(a) {
    console.log("run() wurde ausgeführt")
    console.log(a());
}

let f = function() {
    return "hallo welt";
}

let f2 = function() {
    console.log("hallo welt");
}

run(f);

setTimeout(f2, 5000);