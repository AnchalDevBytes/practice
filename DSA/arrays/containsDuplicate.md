```bash
# Using Map

var containsDuplicate = function (nums) {
    const map = new Map();
    
    for(let i=0; i<nums.length; i++) {
        if(map.has(nums[i])) {
            return true;
        }

        map.set(nums[i], i);
    }

    return false;
};

```

```bash
# Using Set

var containsDuplicate = function (nums) {
    const set = new Set();
    
    for(let num of nums) {
        if(set.has(nums)) {
            return true;
        }

        set.add(num);
    }

    return false;
};

```