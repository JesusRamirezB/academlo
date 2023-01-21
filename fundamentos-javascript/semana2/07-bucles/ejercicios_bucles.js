// 1. Crea un arreglo con los números del 1 al 400
let arr = []
for (let i = 1; i <= 400; i++) {
    arr.push(i)
}
console.log(arr)

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.
function rangeNums(n1, n2) {
    let range = []
    for (n1; n1 <= n2; n1++) {
        range.push(n1)
    }
    return range
}
console.log(rangeNums(1, 12))

// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sumArr(arr) {
    let sum = arr.reduce((a, b) => a + b, 0)
    return sum
}
console.log(sumArr(numeros))

// 4. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con los correos de los usuarios.
const usuarios = [
    {
        nombre: 'Erik',
        edad: 29,
        correo: 'erik@academlo.com',
        social: [
            { nombre: 'facebook', url: 'facebook/erik' },
            { nombre: 'twitter', url: 'twitter/erik' }
        ],
        genero: 'Hombre'
    },
    {
        nombre: 'Georg',
        edad: 33,
        correo: 'georg@academlo.com',
        social: [
            { nombre: 'facebook', url: 'facebook/georg' },
            { nombre: 'twitter', url: 'twitter/georg' }
        ],
        genero: 'Hombre'
    },
    {
        nombre: 'Andrea',
        edad: 42,
        correo: 'andrea@hotmail.com',
        social: [
            { nombre: 'facebook', url: 'facebook/andrea' },
            { nombre: 'twitter', url: 'twitter/andrea' }
        ],
        genero: 'Mujer'
    },
    {
        nombre: 'Oscar',
        edad: 31,
        correo: 'oscar@academlo.com',
        social: [
            { nombre: 'facebook', url: 'facebook/oscar' },
            { nombre: 'twitter', url: 'twiter/oscar' }
        ],
        genero: 'Hombre'
    },
    {
        nombre: 'Daniela',
        edad: 22,
        correo: 'andrea@uaq.mx',
        social: [
            { nombre: 'facebook', url: 'facebook/andrea' },
            { nombre: 'twitter', url: 'twitter/andrea' }
        ],
        genero: 'Mujer'
    }
]
function emails(users) {
    let emails = []
    users.forEach(user => {
        emails.push(user.correo)
    })
    return emails
}
console.log(emails(usuarios))

// 5. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todas las urls de las cuentas de facebook.
function getFacebookUrls(users) {
    let facebooks = []
    users.forEach(user => {
        facebooks.push(user.social[0].url)
    })
    return facebooks
}
console.log(getFacebookUrls(usuarios))

// 6. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los nombres de los usuarios que sean mujeres.
function getFemales(users) {
    let females = []
    users.forEach(user => {
        if (user.genero == 'Mujer') {
            females.push(user.nombre)
        }
    })
    return females
}
console.log(getFemales(usuarios))

// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los usuarios que esten dentro del rango de edad de 20 a 30 años.
function getYoungAdults(users) {
    let youngAdults = []
    users.forEach(user => {
        if (20 <= user.edad && user.edad <= 30) {
            youngAdults.push(user.nombre)
        }
    })
    return youngAdults
}
console.log(getYoungAdults(usuarios))

// 8. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
function middle(arr) {
    if (arr.length % 2 == 0) {
        return [arr[arr.length / 2 - 1], arr[arr.length / 2]]
    } else {
        return arr[(arr.length - 1) / 2]
    }
}
console.log(middle([1, 1, 1, 1, 2, 2, 1, 1, 1, 1]))

// 9. El reto Fizz Buzz: Tenemos un array de números del 1-100, todos los que son múltiplos de 3 deben devolver Fizz, todos los que son múltiplos de 5 deben devolver Buzz y los que son múltiplos de ambos, es decir, 3 y 5, deben devolver Fizz Buzz.
let fizzB = []
for (let i = 1; i <= 100; i++) {
    fizzB.push(i)
}
function fizzBuzz(arr) {
    arr.forEach(n => {
        if ((n % 5 == 0) && (n % 3 == 0)) {
            console.log(n + ': ' + 'FizzBuzz')
            return
        }
        else if (n % 3 == 0) {
            console.log(n + ': ' + 'Fizz')
            return
        }
        else if (n % 5 == 0) {
            console.log(n + ': ' + 'Buzz')
            return
        }else{
            console.log(''+n)
        }
    })
    return 'Done'
}
console.log(fizzBuzz(fizzB))