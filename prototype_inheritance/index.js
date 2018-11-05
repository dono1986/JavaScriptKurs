"use strict";

let student = {
    getFullName: function() {
        alert(this.firstname + " " + this.lastname)
    }
}

let max = {
    firstname: "Max",
    lastname: "Mustermann"
};

console.log(max);