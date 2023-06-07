function createCube(size) {
    //generales
    let caraA = '';
    let caraB = '';
    
    for (let i = 0; i < size; i++){
        caraA += " ".repeat(size - (i + 1)) + "/\\".repeat(i + 1) + "_" + "\\_".repeat(size - 1 ) + "\\\n";

        
        if (i === size - 1) {
            caraB += " ".repeat(i) + "\\/".repeat(size - i) + "_/".repeat(size);
        } else{
            caraB += " ".repeat(i) + "\\/".repeat(size - i) + "_/".repeat(size) + "\n";
        }
    }
    return caraA + caraB;
}



console.log(createCube(3));