```bash

var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        const width = right - left;
        const currHeight = Math.min(height[left], height[right]);

        maxWater = Math.max(maxWater, width * currHeight);

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }    

    return maxWater;
};

```
