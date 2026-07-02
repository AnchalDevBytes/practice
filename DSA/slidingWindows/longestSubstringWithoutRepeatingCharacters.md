```bash

var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let left = 0;

    const set = new Set();

    for(let right = 0; right < s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        longest = Math.max(longest, right - left + 1);
    }    

    return longest;
};

```
