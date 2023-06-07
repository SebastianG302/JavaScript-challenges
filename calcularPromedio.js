const calcularPromedio = (notas) =>{
    let sumaNotas = 0;
    notas.forEach(nota => {
        sumaNotas += nota;
    });
    return Number((sumaNotas / notas.length).toFixed(2))
}






const numeros = [5, 10, 15, 20];
const promedio = calcularPromedio(numeros);
console.log(promedio); // Debería imprimir 12.5const calcularPromedio = (notas) =>{

let sumaNotas = 0;
notas.forEach(nota => {
    sumaNotas += nota;
});

return Number((sumaNotas / notas.length).toFixed(2))




