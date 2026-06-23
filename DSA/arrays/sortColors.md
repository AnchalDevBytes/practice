```bash
# Insertion Sort

var sortColors = function(nums) {
    for(let i=1; i<nums.length; i++) {
        let j = i
        while( j> 0 && nums[j] < nums[j-1]) {
            [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
            j--;
        }
    }
};


```


```bash
# Dutch National Flag Algorithm

var sortColors = function(nums) {
    let i=0;
    let left = 0;
    let right = nums.length - 1;

    while(i <= right) {
        if(nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else if(nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            i++;
        }
    }
};

```

