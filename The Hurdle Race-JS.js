function hurdleRace(k, height) {

    let maxHurdle = 0;
    let potionsAmount = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i] > k && height[i] > maxHurdle) {
            maxHurdle = height[i];
        }
    }

    if (maxHurdle > k) {
       potionsAmount = maxHurdle - k; 
    } else {
        potionsAmount = 0;
    }
    
    return potionsAmount;

}