function checkJump(heights) {


  if(!heights.every(num => num === heights[0])){
    const izq = heights.splice(0, heights.indexOf(Math.max(...heights)));

    izq.push(heights.shift())
    const condicionIzq = izq.every((num, i) => i === izq.length - 1 || num <= izq[i + 1]);
    const condicionDer = heights.every((num, i) => i === heights.length - 1 || num >= heights[i + 1]);
   
    
  
    return condicionIzq && condicionDer && heights.length > 0 && izq.length > 1;
  }

  return false;



}




console.log(checkJump([3, 2 , 1])) // true
