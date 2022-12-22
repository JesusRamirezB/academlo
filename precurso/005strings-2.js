// Si sabemos cuantas letras tiene un texto (gracias a la propiedad length) y asignamos un numero a cada letra
// ? Como podriamos saber que indice/posicion corresponde a la primer letra?
// Siempre sera el 0
// ? Como podriamos saber que indice/posicion corresponde a la ultima letra?
// Es igual la longitud menos 1
// ? Como podriamos saber que indice/posicion corresponder a la penultima letra?
// Es igual a la longitud menos 2

// H o l a --> 4
// 1 2 3
// 0 1 2

const text = 'Hola';
const length = text.length;
const lastIndex = length-1
console.log(text[lastIndex]);

// C o c h e --> 5
// 1 2 3 4 5
// 0 1 2 3 4

// D a n i e l --> 6
// 1 2 3 4 5 6
// 0 1 2 3 4 5




// indices/posiciones
// propiedad length
// relacion entre length e indices