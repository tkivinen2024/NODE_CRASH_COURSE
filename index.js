// -----------------------------------------------------------------
// --- 21.3.2024  Timo Kivinen
// ---
// ---
// ---
// --- Video: 22:44 (https://www.youtube.com/watch?v=fBNz5xF-Kx4)
// -----------------------------------------------------------------

// 1 console.log('Hello From Node.js...');
//const person = require('./person');
const Person = require('./person');
const person1 = new Person('John Doe', 30);

//console.log(person.name);

person1.greeting();
