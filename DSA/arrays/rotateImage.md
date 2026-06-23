```bash

var rotate = function(matrix) {
    let n = matrix.length;

    # Transpose
    for(let i=0; i<n; i++) {
        for(j=i+1; j<n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    # Reverse row
    for(let row of matrix) {
        row.reverse();
    }
};

```
