'use strict'
console.log('day.js');

let day = 6;


switch (day) {
    case 1 :
        console.log('Pirmadienis');
        break;
    case 2 :
        console.log('Antradienis');
        break;
    case 3 :
        console.log('Trečiadienis');
        break;
    case 4 :
        console.log('Ketvirtadienis');
        break;
    case 5 :
        console.log('Penktadienis');
        break;
    case 6 :
    case 7 :
        console.log('Savaitgalis');
        break;
    default :
    console.log('Nedarbo diena');
}

if (day === 1) {
    console.log('Pirmadienis');
} else if (day === 2) {
    console.log('Antradienis');
} else if (day === 3) {
    console.log('Trečiadienis');
} else if (day === 4) {
    console.log('Ketvirtadienis');
} else if (day === 5) {
    console.log('Penktadienis');
} else if (day === 6 || day === 7) {
    console.log('Savaitgalis');
} else {
    console.log('Nedarbo diena');
}


