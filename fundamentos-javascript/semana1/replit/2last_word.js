function findLastWord(text) {
    // escribe tu solución aquí
    return text.slice(text.lastIndexOf(' '), (text.length))
}
console.log('*',findLastWord('Hola mundo, me llamo Jesus'))