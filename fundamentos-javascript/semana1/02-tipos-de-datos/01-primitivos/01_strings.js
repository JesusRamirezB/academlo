/*** TIPOS DE DATOS ==> Cadnas de Texto ***/
// ==> Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas.
// En JavaScript hay 3 tipos de comillas.
// 1. Comillas dobles ""
// 2. Comillas simples ''
// 3. Backticks (comillas invertidas) ``

let str1 = "Cadena con comillas dobles"
let str2 = "Cadena con comillas simples"
let str3 = `Cadena con comillas invertidas`

// ==> Uso de comillas dentro de comillas
// let srt4 = 'I'm in love with JS'
let srt4 = "I'm in love with JS"
let str5 = 'Mi libro favorito es "El principito"'

// ==> Caracter de escape
let str6 = "Mi libro favorito es \"El Principito\""

// ==> Salto de linea
console.log('Lista de compra: \n -Manzana \n -Pera \n -Sandia')

// ==> Multiples lineas con backticks
console.log(`Lista de compra:
-Manzana
-Pera
-Sandia`)

// ==> Concatencacion de cadenas
// Con el operador +
let str8 = 'jesus'
let str9 = 'Gabi'
console.log(str8 + ' ' + str9)

// Con backticks
console.log(`${str8} ${str9}`)

// ==> Iteracion de cadenas de texto
// Las cadenas de texto son iterables, contienen indices y pueden ser recorridas
let cadenaDeTexto = 'Hola como estan'

console.log(`indice 0 = ${cadenaDeTexto[0]}`)
console.log(`indice 1 = ${cadenaDeTexto[1]}`)
console.log(`indice 2 = ${cadenaDeTexto[2]}`)
console.log(`indice 3 = ${cadenaDeTexto[3]}`)
console.log(`indice 4 = ${cadenaDeTexto[4]}`)
console.log(`indice 5 = ${cadenaDeTexto[5]}`)
console.log(`indice 6 = ${cadenaDeTexto[6]}`)
console.log(`indice 7 = ${cadenaDeTexto[7]}`)
console.log(`indice 8 = ${cadenaDeTexto[8]}`)
console.log(`indice 9 = ${cadenaDeTexto[9]}`)
console.log(`indice 10 = ${cadenaDeTexto[10]}`)
console.log(`indice 11 = ${cadenaDeTexto[11]}`)
console.log(`indice 12 = ${cadenaDeTexto[12]}`)
console.log(`indice 13 = ${cadenaDeTexto[13]}`)
console.log(`indice 14 = ${cadenaDeTexto[14]}`)


// Como saber el total de caracteres que tiene una cadena de texto
// ==> Propiedad length
console.log(cadenaDeTexto.length)
