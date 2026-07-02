```bash

var topKFrequent = function(nums, k) {
    let freq = new Map();

    for(let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }    

    return [...freq.entries()].sort((a,b) => b[1] - a[1]).slice(0, k).map(item => item[0]);
};

```
