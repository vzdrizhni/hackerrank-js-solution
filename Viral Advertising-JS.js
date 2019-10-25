function viralAdvertising(n) {

    let ad = 5;
    let sharedPeople = 0;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sharedPeople = Math.floor(ad/2);        
        ad = sharedPeople*3;
        sum += sharedPeople;
    }

    return sum;

}