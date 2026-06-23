```bash

var insert = function(intervals, newInterval) {
    intervals.push(newInterval); #push new intervals to intervals
    intervals.sort((a,b) => a[0] - b[0]); #sort the intervals then below merge the overlapping.

    const result = [intervals[0]];

    for(let i=1; i<intervals.length; i++){
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
