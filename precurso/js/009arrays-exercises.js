// 1. Averiguar si el correo de un usuario pertenece a Academlo.
const emails = ['jesus@gmail.com', 'jesus@academlo.com'];
console.log(emails[0].endsWith('@academlo.com'),' ', emails[1].endsWith('@academlo.com'));

// 2. Encuentra el tamano de la primer palabra de un string.
const texts = ['Hoy es jueves', 'Tengo que descansar'];
console.log(texts[0].slice(0, texts[0].indexOf(' ')) , '-->', texts[0].indexOf(' '))
console.log(texts[1].slice(0, texts[1].indexOf(' ')) , '-->', texts[1].indexOf(' '))