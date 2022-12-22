// 1. Averiguar si el correo de un usuario pertenece a Academlo.
console.log("Ejercicio 1. Averiguar si el correo de un usuario pertenece a Academlo.")
const correo = 'erick@academlo.com';
const correo2 = 'erick@gmail.com';
console.log('erick@academlo.com', '-->', correo.endsWith('@academlo.com'));
console.log('erick@gmail.com', '-->', correo2.endsWith('@academlo.com'));

// 2. Encuentra el tamano de la primer palabra de un string.
console.log('\nEjercicio 2. Encuentra el tamano de la primer palabra de un string.')
const text = 'Esto es un texto para el ejercicio';
console.log(text.slice(0, text.indexOf(' ')) , '-->', text.indexOf(' '));

// 3. Encontrar el tamaño de la última palabra en un texto.
console.log('\nEjercicio 3. Encontrar el tamaño de la última palabra en un texto.')
const text2 = 'Esto es un texto para el ejercicio';
const tamanio = text2.length - text2.lastIndexOf(' ') - 1;
console.log(text.slice((text.lastIndexOf(' ') +1 ), (text2.length)) , '-->', tamanio);

// 4. Encontrar el tamaño de la segunda palabra en un texto.
console.log('\nEjercicio 4. Encontrar el tamaño de la segunda palabra en un texto.')
const text3 = 'Esto es un texto para el ejercicio';
const modText = text3.slice(text3.indexOf(' ') + 1, text3.length)
const secondWord = modText.slice(0, modText.indexOf(' '))
console.log(secondWord, '-->', secondWord.length)