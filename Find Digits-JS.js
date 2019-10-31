function findDigits(n) {

    let divCount = 0;
    let nToStr = n.toString().split("");    
    nToStr.forEach((item, i)=>{
        if (n%item == 0) {
            divCount++;
        }
    })

    return divCount;

}