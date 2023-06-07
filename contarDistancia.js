function minimumDistances(a) {
    let posiciones = [];
    
    for(let i = 0; i < a.length; i++){
        let elementoActual = a[i];

        for(let j = i + 1; j < a.length; j++){
            let elementoComparado = a[j];

            if (elementoActual === elementoComparado) {
                posiciones.push(j - i);
            }
        }
    }
    return posiciones.sort((a, b) => a - b)[0] ? posiciones.sort((a, b) => a - b)[0] : -1;
}


console.log(minimumDistances([7, 1, 3, 4, 1, 7]));