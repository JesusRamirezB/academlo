/*
Tu recibes un string como el siguiente const carta = 'bici coche balón  _playstation bici   coche peluche' 
Tu tarea es lograr retornar el siguiente objeto. Teniendo en cuenta que el niño que le mando esta carta a santa se podría quedar sin regalos si tu no logras hacer que santa sepa que fue lo que pidieron en esa casa. 
OJO Los niños no saben escribir en pc por lo que a veces usan más de un espacio
OJO2 todo lo que empiece con "" es algo que ya se le dio por lo que ya no lo tienes que contar

Resultado Esperado 
{
bici: 2,
coche: 2,
balón: 1,
peluche: 1
}
*/

const carta = 'bici coche balón  _playstation bici   coche peluche peluche ropa'

function letterToSanta(carta) {
    let obj = {}
    carta.split(' ').forEach(present => {
        if (present != '' && !present.includes('_')) {
            if (present in obj) {
                obj[present] += 1
            } else {
                obj[present] = 1
            }
        }
    })
    return obj
}

console.log(letterToSanta(carta))