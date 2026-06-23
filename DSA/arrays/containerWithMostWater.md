```bash
# Two Pointers 

var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length-1;

    while(left < right) {
        const width = right - left;

        const currWater = width * (Math.min(height[left], height[right]));

        maxWater = Math.max(maxWater, currWater);

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};


```
