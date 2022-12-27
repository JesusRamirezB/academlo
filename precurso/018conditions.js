// Si tiene 18 o mas y es menor de 30 enviamos stickers
// Si tiene 30 o mas y menos de 40 enviamos una playera
// Si tiene mas de 40 y menos de 50 enviamos una libreta
// Si tiene 50 o mas enviamos una sudadera

const age = 20;

if(age >= 18 && age < 30){
    console.log('Te enviaremos stickers');
}else if(age >= 30 && age < 40){
    console.log('Te enviaremos una playera');
}else if(age >= 40 && age < 50){
    console.log('Te enviaremos una libreta');
}else if(age > 50){
    console.log('Te enviaremos una Sudadera');
}