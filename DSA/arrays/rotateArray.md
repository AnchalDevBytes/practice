```bash

var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // suppose if k = 5 and n = 3; 5%3 = 2 that means rotating 5 times === rotating 2 times;

    reverse(nums, 0, n-1); // rotate complete array
    reverse(nums, 0, k-1); // rotate upto k to reverse first half
    reverse(nums, k, n-1);  // rotate from k to end to make reverse second half
};

function reverse(arr, left, right) {
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

```
