function findSecondWord(text) {
    // escribe tu solución aquí
    return text.slice(text.indexOf(' ') + 1, (text.indexOf(' ', text.indexOf(' ') + 1)))
}

console.log(findSecondWord('Hola mundo todos'))