// && - y
// || - o

const user = {
    name: 'Erik',
    age: 30,
    gender: 'Male'
};

// Para ser aceptado tiene que ser mayor a 18 anios
    // SI es hombre el mensaje seria "Bienvenido"
    // Si es mujer el mensaje seria "Bienvenida"

console.log('Usuario valido?: ', (user.age >= 18));