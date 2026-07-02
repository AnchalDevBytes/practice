```bash

var minWindow = function(s, t) {
    if(t.length > s.length) return "";

    #frequency of character required;
    let need = new Map();
    for(let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }   

    #frequency of current window
    const window = new Map();

    let required = need.size; #number of unique char needed
    let formed = 0; #number of charater currently satisfied;

    let left = 0;
    let minLen = Infinity;
    let start = 0; 

    for(let right=0; right<s.length; right++) {
        const char = s[right];

        # Add current char into window
        window.set(char, (window.get(char) || 0) + 1);

        # if the frequency become exactly what we need 
        if(need.has(char) && window.get(char) === need.get(char)) {
            formed++;
        }

        # if current window contain all required char 
        while (formed === required) {
            # update smallest window
            if(right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            # remove left char
            const leftChar = s[left];
            window.set(leftChar, (window.get(leftChar) || 0) - 1);

            # Window becomes invalid
            if (
                need.has(leftChar) &&
                window.get(leftChar) < need.get(leftChar)
            ) {
                formed--;
            }

            left++;
        }
    }

    return minLen === Infinity ? "" : s.slice(start, start + minLen);
};

```
