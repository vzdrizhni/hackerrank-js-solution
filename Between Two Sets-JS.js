let numCount = 0;
    let sortedA = a.sort((a,b)=>{
        return a -b;
    })

    let theLastNum = sortedA.reduce((a,b,c,d)=> {
      if (b % a == 0) {
        return b;
      } else if (d.length > 2) {
        return (a*b)/d.length;
      }else {
        return a*b;
      };
    })
    let vLastNum = theLastNum;
    let sortedB = b.sort((a,b)=>{
        return a -b;
    })     
    
        while (vLastNum <= sortedB[0]) {
            
            if (sortedB.every(num => {
                return num % vLastNum == 0;
            })) 
            {                               
                console.log(vLastNum);
                numCount++;
            } 
            vLastNum += theLastNum;
        }
    console.log(numCount)
    return numCount; 