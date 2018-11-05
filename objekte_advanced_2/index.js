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

class Student extends Person {
    constructor(firstname, lastname, age, subject) {
        // Super() MUSS aufgerufen werden, auch wenn kein Konstruktor in der Basisklasse explizit erstellt wurde
        super(firstname,lastname,age);
        this.subject = subject;
    }

    printPerson() {
        console.log("Student " + this.firstname + " " + this.lastname + " " + "(" + this.age + ")" + " is enrolled in " + this.subject);                
    }


}

let p = new Person("Max", "Mustermann", 24);

p.printPerson();

let s = new Student("Max", "Mustermann", 24, "EIS");

s.printPerson();


