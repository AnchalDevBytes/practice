```bash
# Index at which leftSum is equal to rightSum then it is pivot index

var pivotIndex = function(nums) {
    let totalSum = 0;

    for(let num of nums) {
        totalSum += num;
    }

    let leftSum = 0;

    for(let i=0; i<nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];

        if(leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};

```