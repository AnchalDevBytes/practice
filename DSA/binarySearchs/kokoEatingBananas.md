```bash

var minEatingSpeed = function(piles, h) {
    let left = 0;
    let right = Math.max(...piles);

    while(left < right) {
        const mid = Math.floor((left + right) / 2);

        let hours = 0;

        for(let pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if(hours <= h) {
            # This will work but look for more smaller if possible;
            right = mid;
        } else {
            # Too slow
            left = mid + 1;
        }
    }

    return left;
};

```
