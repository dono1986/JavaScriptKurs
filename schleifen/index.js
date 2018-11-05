// Lege mehrdimensionales Array mit zwei Teilarrays und je zwei Personen an
let personen = [ 
    "paula", "erik",
    "julia", "max" 
];

for(let i=0;i < personen.length; i++) {
    console.log(personen[i]);
}

let i2 = 0;

while(i2<personen.length) {
    console.log(personen[i2]);
    i2++;
}

let i3 = 0;

do {
    console.log(personen[i3]);
    i3++;
} while(i3<personen.length);