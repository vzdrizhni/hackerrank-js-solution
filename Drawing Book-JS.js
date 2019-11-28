function pageCount(n, p) {
   
    let pages = 0;
    
    if (p > n/2 && n%2 == 0) {
        for (let i = n+1; i > p; i--) {
            pages++;
        }
    } else if (p > n/2 && n%2 == 1) {
        for (let i = n; i > p; i--) {
            pages++;
        }
    } else {
       for (let i = 0; i < p; i++) {
            pages++;
        } 
    }

    return Math.floor(pages/2);

}