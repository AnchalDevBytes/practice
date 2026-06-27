```bash

var longestPalindrome = function(s) {
    let longest = '';

    function expandAroundCenter(left, right) {
        while(
            left >= 0 && 
            right < s.length && 
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return s.slice(left + 1, right);
    }

    for(let i=0; i<s.length; i++) {
        const odd = expandAroundCenter(i, i);
        const even = expandAroundCenter(i, i+1);

        if(odd.length > longest.length) {
            longest = odd;
        }

        if(even.length > longest.length) {
            longest = even;
        }
    }
    
    return longest;
};

```
