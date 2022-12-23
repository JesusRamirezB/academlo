// 1. crear un arreglo de 5 usuarios que tengan las propiedades email y name
// 2. Validar si los usuarios tienen correo de academlo

const users = [
    {name: 'Jesus', email: 'jesus@academlo.com'},
    {name: 'andres', email: 'andres@gmail.com'},
    {name: 'gabi', email: 'gabi@gmail.com'},
    {name: 'yayo', email: 'yayo@academlo.com'},
    {name: 'beni', email: 'beni@gmail.com'},    
];

console.log(users[0].email.endsWith('academlo.com'))
console.log(users[1].email.endsWith('academlo.com'))
console.log(users[2].email.endsWith('academlo.com'))
console.log(users[3].email.endsWith('academlo.com'))
console.log(users[4].email.endsWith('academlo.com'))
