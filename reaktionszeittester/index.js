"use strict"

let gameRunning = false;
let timeStart;

function startGame() {

    document.body.style.backgroundColor = "white";

    let time = 2500 + (Math.random() * 5000);

    setTimeout(() => {
        gameRunning = true;

        timeStart = Date.now();

        document.body.style.backgroundColor = "green";

    }, time);

}

window.addEventListener("load", function() {

    this.document.addEventListener("click", () => {

        if(gameRunning) {
            gameRunning = false;
            let timeEnd = Date.now();

            alert("Sekunden bis Click: " + (timeEnd - timeStart)/1000);
            startGame();
        }
    });

    startGame();

});