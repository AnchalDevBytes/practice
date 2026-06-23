```bash

var canJump = function(nums) { //[3,2,1,0,4]
    let farthest = 0;

    for(let i=0; i<nums.length; i++) {
        if(i > farthest) return false; // Not possible to reach;

        farthest = Math.max(farthest, i+nums[i]);
    }

    return true;
};


```
