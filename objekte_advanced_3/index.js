"use strict";

class Person {

    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    printPerson() {
        console.log(this.firstname + " " + this.lastname + " " + "(" + this.age + ")");                
    }

}

window.setTimeout();
let p = new Person("Max", "Mustermann", 24);

// Funktioniert
p.printPerson();

// Funktioniert NICHT, da der Kontext verloren gegangen ist. This ist hier undefined
let print = p.printPerson;
print();


class Person {

    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    enroll() {
        setTimeout(() => {
            // "this" verweist hier auf das Window Objekt, nicht auf das Person Objekt, da es im Kontext von window.setTimeout(..) ausgeführt wird
            console.log(this);
        }, 1000);
    }
}