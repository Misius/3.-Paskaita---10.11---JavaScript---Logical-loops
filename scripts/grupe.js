'use strict'
console.log('grupe.js');

let muzikantai = 5;

if (muzikantai <= 0) {
    console.log('Ne grupė');
} else if (muzikantai === 1) {
    console.log('Solo');
} else if (muzikantai === 2) {
    console.log('Duetas');
} else if (muzikantai === 3) {
    console.log('Trio');
} else if (muzikantai === 4) {
    console.log('Kvartetas');
} else {
    console.log('Didelė grupė');
}

let number = 24;
let result = number % 2 === 0 ? 'Lyginis skaičius' : 'Nelyginis skaičius';
console.log(result);

let vardas = 'Robertas';
let count = vardas.length > 5 ? 'long name' : 'short name';

// let count = Robertas > 5 ? 'long name' : 'short name';
console.log(count);

let clientAge = 16;
let legalAge = 18;
let legal = clientAge >= legalAge ? 'Can drive' : 'Cannot drive';
console.log(legal);


let phone = 'iPhoe';
let isIphoneUser = phone === 'iPhone' ? 'True' : 'False';
console.log(isIphoneUser);

let car = 'Lada'

if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
    console.log('Priklauso VW group.');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce'){
    console.log('Priklauso BMW group.');
} else {
    console.log('Kitas automobilis.');
}