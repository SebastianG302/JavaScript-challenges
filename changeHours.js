function timeConversion(s) {
    if (s[8] === "A") {
        if (parseInt(s.substring(0, 2)) === 12) {
            return '00' + s.substring(2, 8);
        }
        return s.substring(0, 8);
    }
     
    let hora = parseInt(s.substring(0, 2)) + 12;

    if (hora == 24) {
        hora = 12;
    }
    return hora + s.substring(2, 8)
}







console.log(timeConversion("06:40:03AM"));