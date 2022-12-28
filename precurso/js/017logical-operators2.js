// && - y
// || - o

const user = {
    name: 'Erik',
    age: 30,
    gender: 'Other'
};

// Para ser aceptado tiene que ser mayor a 18 anios
    // SI es hombre el mensaje seria "Bienvenido"
    // Si es mujer el mensaje seria "Bienvenida"

if (user.age >= 18){
    if (user.gender === 'Male'){
        console.log('Bienvenido');
    }
    else if (user.gender === 'Female'){
        console.log('Bienvenida');
    }
    else{
        console.log('Bienvenide');
    }
}else{
    console.log('No cumples con la edad.')
}