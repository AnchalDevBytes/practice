```bash

var compress = function(chars) {
    let result = '';
    let i = 0;

    while(i < chars.length) {
        let count = 1;

        while(i + count < chars.length && chars[i] === chars[i + count]) {
            count++;
        }

        result += chars[i];

        if(count > 1) {
            result += count;
        }

        i += count;
    }

    return result;

};

```
