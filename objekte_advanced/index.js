
let person = { firstname: "max",
                lastname: "mustermann",
                age: 24,

                printPerson: function() {
                    console.log(this.firstname + " " + this.lastname + " " + "(" + this.age + ")");                
                }

};

function printPerson(p) {
    console.log(p.firstname + " " + p.lastname + " " + "("+p.age+")");
}


console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);

person.test = "Miau";
console.log(person.test);


person.printPerson();