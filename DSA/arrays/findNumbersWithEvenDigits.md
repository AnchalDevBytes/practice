```bash
# Number with even digits

var findNumbers = function(nums) {
    let totalEvenNumberDigits = 0;
    
    for(let num of nums) {
        if(String(num).length % 2 === 0) {
            totalEvenNumberDigits += 1;
        }
    }    

    return totalEvenNumberDigits;
};


```
