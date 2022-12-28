// 1. Averiguar si el correo de un usuario pertenece a Academlo.
const user = {
    name: 'Jesus',
    age: 22,
    email: 'jesus@gmail.com'
};
const user2 = {
    name: 'Andres',
    age: 2,
    email: 'andres@academlo.com'
};

console.log(user.email.endsWith('@academlo.com'));
console.log(user2.email.endsWith('@academlo.com'));

// 2. Encuentra el tamano de la primer palabra de un string.
const user3 = {
    name: 'Erik',
    description: 'Me gusta la programación'
};

const user4 = {
    name: 'Daniel',
    description: 'Estoy aprendiendo a programar'
};

console.log(user3.description.slice(0, user3.description.indexOf(' ')) , '-->', user3.description.indexOf(' '));
console.log(user4.description.slice(0, user4.description.indexOf(' ')) , '-->', user4.description.indexOf(' '));