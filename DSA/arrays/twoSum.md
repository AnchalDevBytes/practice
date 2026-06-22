```bash
<!-- Brute Force Approach -->

 var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    };
};

```

```bash
<!-- Using Map -->

var twoSum = function(nums, target) {
    let map = new Map();

    for(let i=0; i<nums.length; i++) {
        const compliment = target - nums[i];

        if(map.has(compliment)) {
            return [map.get(compliment), i];
        }

        map.set(nums[i], i);
    }
};
```