function getMoneySpent(keyboards, drives, b) {

    let highestPrice = 0;

    for  (let i = 0; i < keyboards.length; i++ ) {
        for (let j = 0; j < drives.length; j++) {
            if (highestPrice < (keyboards[i] + drives[j]) && (keyboards[i] + drives[j]) <= b) {
                highestPrice = keyboards[i] + drives[j];
            }
        }
    }

    if (highestPrice <= b && highestPrice != 0) {
        return highestPrice;
    } else {
        return -1;
    }    

}