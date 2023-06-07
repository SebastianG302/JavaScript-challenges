const esPalindromo = (cadena) =>{
  const cadenaSinEspacios = cadena.toLowerCase().replace(/\s+/g, '');
  let array = cadenaSinEspacios.split('');
  let cadenaRevertida = array.reverse().join('');

  return cadenaSinEspacios === cadenaRevertida;
}


console.log(esPalindromo("reconocer"));
// Debería imprimir true
console.log(esPalindromo("hola"));
// Debería imprimir false
console.log(esPalindromo("Anita lava la tina"));
// Debería imprimir true