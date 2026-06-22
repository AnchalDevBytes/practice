```bash 
# Running sum is the sum including the all revious elements + current element

var runningSum = function(nums) {
    let prefix = 0;
    for(let i=0; i<nums.length; i++) {
        nums[i] += prefix;
        prefix = nums[i];
    }

    return nums;
};

```
