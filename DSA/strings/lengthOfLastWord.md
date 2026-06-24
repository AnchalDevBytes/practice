```bash

var lengthOfLastWord = function(s) {
    const cleanedWords = s.split(' ').filter((word) => word !== '');

    return cleanedWords[cleanedWords.length - 1].length;
};

```
