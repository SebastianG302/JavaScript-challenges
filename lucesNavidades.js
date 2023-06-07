
function countTime(leds) {

    let condition = true;
    let suma = 0;

    if (leds.every(value => value === 1)) 
        return 0;
    

    function convertirLeds(arr) {
        return arr.map((led, i) =>{
            if(i === 0 && arr[arr.length - 1] === 1 || led === 0 && arr[i - 1] === 1 || led === 1)
                return 1;
            else
                return 0
        });
    }


    let resultado = convertirLeds(leds);
    while (condition) {
        if (resultado.every(value => value === 1)) {
            suma += 7;
            condition = false;
        } else {
            resultado = convertirLeds(resultado);
            suma += 7;
        }
    }
    return suma;
}





const leds = [0, 1, 1, 0, 1]
console.log(countTime(leds));


console.log(countTime([0, 0, 0, 1])) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0])) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]