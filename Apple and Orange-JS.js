function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let applesHit = 0;
    let orangesHit = 0;
    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            applesHit++;
        };        
    };

    for (let i = 0; i < oranges.length; i++) {
        if (b + oranges[i] >= s && b + oranges[i] <= t) {
            orangesHit++;
        }
    }

    console.log(applesHit);
    console.log(orangesHit);
   
}