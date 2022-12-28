// Enviar un correo a un usuario
    // 1. Obtener correo
    // 2. Eviar correo

const firstUser = {
    naem: 'Jesus',
    age: 22,
    email: 'jesus@academlo.com',
    social: [
        {name: 'facebook', url: 'facebook/jesus'},
        {name: 'twitter', url: 'twitter/jesus'}
    ],
    gender: 'Male'
};

function getEmail(user){
    return user.email;
}

function sendEmail(email){
    console.log('Enviamos un correo a ' + email)
}

sendEmail(getEmail(firstUser))