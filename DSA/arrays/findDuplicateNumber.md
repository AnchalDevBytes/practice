```bash
# It is acceptable but it take space O(n) and we want O(1) 

var findDuplicate = function(nums) {
    const set = new Set();

    for(let num of nums) {
        if(set.has(num)) {
            return num;
        } else {
            set.add(num);
        }
    }
};

```

```bash
# this is the Floyd's Tortoise and Hare Algorithm

var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while(slow !== fast);

    slow = nums[0];

    while(slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};

```
