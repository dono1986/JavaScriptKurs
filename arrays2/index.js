// Lege Array mit Personen an
let personen = ["paula", "erik", "julia", "max"];

//Iteriere durch Personenliste und gib jede aus
for(let element of personen) {
    console.log(element);
}

//Iteriere durch Personenliste und gib jede aus (Alternative)
personen.forEach(element => {
    console.log(element);
});