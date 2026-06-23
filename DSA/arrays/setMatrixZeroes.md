```bash

var setZeroes = function(matrix) {
    const rows = new Set(); # stores rows with 0's
    const cols = new Set();  # stores cols with 0's

    let m = matrix.length;
    let n = matrix[0].length;

    #  find zeros;
    for(let row=0; row<m; row++) {
        for(let col=0; col<n; col++) {
            if(matrix[row][col] === 0) {
                rows.add(row);
                cols.add(col);
            }
        }
    }

    # apply zeros
    for(let row=0; row<m; row++) {
        for(let col=0; col<n; col++) {
            if(rows.has(row) || cols.has(col)) {
                matrix[row][col] = 0;
            }
        }
    }
};


```
