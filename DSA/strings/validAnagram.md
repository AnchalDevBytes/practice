```bash

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const freqMap = new Map();

    for(let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    for(let char of t) {
        if(!freqMap.has(char)) {
            return false;
        }

        freqMap.set(char, freqMap.get(char) - 1);

        if(freqMap.get(char) < 0) {
            return false;
        }
    }

    return true;
};

```