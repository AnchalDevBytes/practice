```bash
# Maximum Consecutive Ones

var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutive = 0;
    let currentConsecutiveCount = 0;

    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 1) {
            currentConsecutiveCount += 1;
            maxConsecutive = Math.max(maxConsecutive, currentConsecutiveCount);
        } else {
            currentConsecutiveCount = 0;
        }
    }
    
    return maxConsecutive;
};

```
