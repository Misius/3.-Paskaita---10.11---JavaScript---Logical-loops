'use strict';
console.log('laikas.js');


// 6 - 12  rytas
// 13 - 18 = diena
// 19 - 23 = vakaras
// 24 - 5 = naktis

let laikas = 0;

if (laikas >= 6 && laikas <= 12) {
    console.log('Labas rytas');

} else if (laikas >= 13 && laikas <= 18) {
    console.log('Laba diena');
}else if (laikas >= 19 && laikas <= 23) {
    console.log('Labas vakaras');
} else if (laikas === 24 || laikas >= 0 && laikas <= 5) {
    console.log('Geros nakties');
} else {
    console.log('Blogai įrašytas laikas');
}


let num1 = -1;

if (num1 < 0 || num1 > 7) {
    console.log('Skaičius netinkamas');
} else {
    console.log('Skaičius tinkamas');
}

