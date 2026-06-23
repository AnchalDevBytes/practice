```bash

var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]); #sort the intervals on the first index of subarrays

    const result = [intervals[0]];

    for(let i=1; i<intervals.length; i++) {  #Merging the overlapping arrays
        const current = intervals[i];

        const lastMerged = result[result.length - 1];

        if(current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            result.push(current);
        }
    }

    return result;
};


```
