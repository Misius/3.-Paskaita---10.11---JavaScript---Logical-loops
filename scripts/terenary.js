'use strict'
console.log('terenary.js');


let sentence = '';
let name = 'Mike';
let town = 'Kaunas';
let isStudent = false;
let dirbaArStudijuoja = isStudent === true ? 'studijuoja' : 'dirba';

/*
Sukurti kintamąjį isStudent (boolean), sukurti kintamąjį Name - įrašom vardą. Sukurti town ir įrašysim miestą.

Norim sugeneruoti sakinį kintamajame sentence.
<vardas> gyvena <miestas> ir yra studiejuoja/dirba
James gyvena londone ir studijuoja
Mike gyvena Kaunas ir Dirba


*/
sentence = `${name} gyvena ${town} ir`;

// if (isStudent === true) {
//     sentence = `${sentence} studijuoja`;
// } else {
//     sentence = sentence + 'dirba'
// }

// isStudent === true ? (dirbaArStudijuoja = 'studijuoja') : (dirbaArStudijuoja = 'dirba');

console.log(sentence);

if (isStudent === true) {
    // true
} else {
    // false
}
let isLoggedIn = false;
let message = isLoggedIn === true ? 'You are currently logged in to the System.' : 'You are currently logged out.';

console.log(message);

// terenary
// isStudent === true ? /*true*/ : /*flase*/;