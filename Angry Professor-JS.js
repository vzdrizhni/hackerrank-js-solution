unction angryProfessor(k, a) {
    
    let students = 0;
    for (let i = 0; i < a.length; i++) {        
        if (a[i] <= 0) {
            students++;
        }
    };
    console.log(students);
    if (students >= k) {        
        return "NO"
    }; 

    if (students < k) {        
        return "YES"
    };

}