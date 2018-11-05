"use strict";

// Sekunde 0
// Sekunde 1

// Sekunde 2



// Sekunde 3




// Sekunde 4


class Renderer {
    constructor(element) {
        this.element = element;
    }

    init() {
        let box = document.createElement("div");
        box.classList.add("gameObj");
        box.style.left = "20px";
        box.style.top = "0px";

        this.element.appendChild(box);
        this.box = box;
        this.pos = 0;
    }

    render(pos) {
        this.box.style.top = pos + "px";
    }
}

class Box {
    constructor() {
        this.position = 0;
        this.speed = 0;
    }

    runLoop() {
        this.speed++;
        this.position+=this.speed;
    }

    moveUp() {
        this.speed = -20;
    //    this.position-=20;
    }
}

class Game {
    constructor(element) {
        this.element = element;
        this.renderer = new Renderer(element);
        this.box = new Box();

        this.isRunning = true;

        this.init();
    }

    init() {
        this.element.addEventListener("click", () => {
            this.box.moveUp();
        }, false);
    }

    start() {

        this.renderer.init();

        let timer = setInterval(
            () => {

                if(this.isRunning) {
                    this.box.runLoop();

                    if(this.box.position<0) {
                        console.log("Obere Kante erreicht!");
                        this.isRunning = false;
                        clearInterval(timer);
                    }
                    
                    if(this.box.position>this.element.clientHeight-this.renderer.box.clientHeight) {
                        console.log("Untere Kante erreicht!");
                        this.isRunning = false;
                        clearInterval(timer);
                    }

                    this.renderer.render(this.box.position);
                }
            }, 
        25);
    
    }
}


window.addEventListener("load", function() {
    
    let gameField = document.getElementById("game");

    let game = new Game(gameField);

    game.start();



});