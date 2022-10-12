'use strict';
console.log('main.js');
// Ir
console.group('&& - Ir operatorius')
console.log('true && true ===', true && true);
console.log('true && false ===', true && false);
console.log('false && true ===', false && true);
console.log('false && false ===', false && false);
console.groupEnd();
// Arba
console.group('|| - Arba operatorius');
console.log('true || true ===', true || true);
console.log('true || false ===', true || false);
console.log('false || true ===', false || true);
console.log('false || false ===', false || false);
console.groupEnd();

console.log('!true', !true);
console.log('!false', !false);
console.log('!kazkas', !'kazkas');
// !! bang bang ~ boolean ('kazkas')
console.log('!!kazkas', !!'kazkas');