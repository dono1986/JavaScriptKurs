// Lege Array mit Personen an
let personen = ["paula", "erik", "julia", "max"];

// Da nicht typisiert --> gemischte Arrays sind möglich
let gemischt = ["toller string", 125];

// Füge an letzter Stelle ein neues Element hinzu
personen.push("marius");

// Füge an erster Stelle ein neues Element hinzu
personen.unshift("noah");

// Entferne letztes Element
personen.pop();

//Entferne erstes Element und speichere es in Variable
let erstesElement = personen.unshift();

// Gib letztes Element des Arrays aus
console.log(personen[personen.length-1]);


personen.forEach(element => {
    console.log(element);
});