```bash

var intersection = function(nums1, nums2) {
    const set = new Set(nums1);
    const result = new Set();

    for(let num of nums2) {
        if(set.has(num)) {
            result.add(num);
        }
    }

    return [...result];
};

```
