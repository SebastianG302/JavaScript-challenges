function contarVocales(cadena) {
    const arrCadena = cadena.split('');
    let suma = 0;
    arrCadena.forEach(letra => {
        if ((/[aeiou]/i).test(letra)) {
            suma++
        }      
    });
    return suma
}

console.log(contarVocales("Hola mundo")); // Debería imprimir 4
console.log(contarVocales("JavaScript")); // Debería imprimir 3
console.log(contarVocales("OpenAI")); // Debería imprimir 3