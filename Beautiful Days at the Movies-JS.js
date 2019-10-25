function beautifulDays(i, j, k) {

    let reversedValueI = (a) => Number(a.toString().split("").reverse().join(""));    
    let happyDaysCount = 0;    

    for (i ; i <= j; i++) {
        if ((i-reversedValueI(i))%k == 0) {
            happyDaysCount++;
        }
    }

    return happyDaysCount;

}