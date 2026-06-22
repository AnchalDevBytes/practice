```bash
# Majority Element

var majorityElement = function(nums) {
    let freq = new Map();

    for(let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    return [...freq.entries()].sort((a,b)=> b[1] - a[1])[0][0];
};

```