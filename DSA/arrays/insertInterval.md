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

```bash

export default function mergeNewInterval(intervals, newInterval) {
  const result = [];
  let [start, end] = newInterval;

  for(const [currStart, currEnd] of intervals) {
    if(currEnd < start) {  // if curr interval is completely before new interval
      result.push([currStart, currEnd]);
    } else if(currStart > end) {  // if curr interval is completelt after new interval
      result.push([start, end]);
      start = currStart;
      end = currEnd;
    } else {  // ovelapping intervals
      start = Math.min(start, currStart);
      end = Math.max(end, currEnd);
    }
  }

  result.push([start, end]);
  return result;
}

```
