"use strict";

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
    }

    runLoop() {
        this.position+=1;
    }

    moveUp() {
        this.position-=20;
    }
}

class Game {
    constructor(element) {
        this.element = element;
        this.renderer = new Renderer(element);
        this.box = new Box();
        this.init();
    }

    init() {
        this.element.addEventListener("click", () => {
            this.box.moveUp();
        }, false);
    }

    start() {

        this.renderer.init();

        setInterval(
            () => {
                this.box.runLoop();

                this.renderer.render(this.box.position);
            }, 
        10);
    
    }
}


window.addEventListener("load", function() {
    
    let gameField = document.getElementById("game");

    let game = new Game(gameField);

    game.start();



});




