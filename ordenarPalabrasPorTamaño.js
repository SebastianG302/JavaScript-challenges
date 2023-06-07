const ordenarPalabrasPorLongitud = frase  => {
    return frase.split(' ').sort((a, b) => a.length - b.length).join(' ');
}




console.log(ordenarPalabrasPorLongitud("JavaScript es genial para programar"));
// Salida esperada: "es para genial JavaScript programar"

console.log(ordenarPalabrasPorLongitud("Hola amigo cómo estás"));
// Salida esperada: "Hola cómo estás amigo"