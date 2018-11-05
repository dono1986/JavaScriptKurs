// Lege mehrdimensionales Array mit zwei Teilarrays und je zwei Personen an
let personen = [ 
    ["paula", "erik"],
    ["julia", "max"] 
];

// Gibt "erik" aus (zweites Element in erstem Teilarray)
console.log(personen[0][1]);

// Gibt alle Elemente aus
for(let teilarray of personen) {
    for(let person of teilarray) {
        console.log(person);
    }
}

// Gibt auch alle Elemente aus
personen.forEach(teilarray => {
    teilarray.forEach(person => {
        console.log(person);
    });
});
