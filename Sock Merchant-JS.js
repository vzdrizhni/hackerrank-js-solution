function sockMerchant(n, ar) {

    let socksPairs = 0;
    ar = ar.sort((a,b)=>{
        return a - b;
    })

    for (let i = 0; i < ar.length; i++) {
        console.log("i = " + i);
        for (let j = i + 1; j < ar.length; j++) {
            console.log("j = " + j);
            if (ar[i] == ar[j]) {
                socksPairs++;
                ar.splice(i,2);
                console.log(ar);
                i = -1;
                break;                 
            }                   
        }       
    }

    return socksPairs;

}