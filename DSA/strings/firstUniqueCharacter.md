```bash

var firstUniqChar = function(s) {
    const freqMap = new Map()

    for(let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }    

    for(let i=0; i<s.length; i++) {
        if(freqMap.has(s[i]) && freqMap.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;

};

```
