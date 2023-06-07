
const obtenerNumerosUnicos = numerosArr => {
    numerosArr.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < numerosArr.length; i++) {
        if (numerosArr[i] !== numerosArr[i + 1]) {
            result.push(numerosArr[i]);
        }else{
            numerosArr.splice(numerosArr.indexOf(numerosArr[i]), 1);
        }
    }
    return result;
}



console.log(obtenerNumerosUnicos([1, 2, 3, 2, 4, 5, 4, 6, 7, 7]));
// Salida esperada: [1, 3, 5, 6]

console.log(obtenerNumerosUnicos([1, 1, 2, 2, 3, 3, 4, 4]));
// Salida esperada: []

console.log(obtenerNumerosUnicos([5, 5, 6, 6, 7, 7, 8, 8]));
// Salida esperada: []

console.log(obtenerNumerosUnicos([1, 2, 3, 4, 5, 6, 7, 8]));
// Salida esperada: [1, 2, 3, 4, 5, 6, 7, 8]