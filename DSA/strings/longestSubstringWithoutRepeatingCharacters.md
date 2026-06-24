```bash

var lengthOfLongestSubstring = function(s) {
   let uniqueChar = [];
   let maxLength = 0;

   for(let i=0; i< s.length; i++) {
    if(uniqueChar.includes(s[i])) {
        while(uniqueChar.includes(s[i])) {
            uniqueChar.shift();
        }
    }
    uniqueChar.push(s[i]);
    maxLength = Math.max(maxLength, uniqueChar.length);
   }
   return maxLength;
};

```

```bash
# Two pointers + sliding window + set solution

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let longest = 0;

    let set = new Set();

    for(let right=0; right < s.length; right++) {
        if(set.has(s[right])) {
            while(set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
        }

        set.add(s[right]);

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};

```
