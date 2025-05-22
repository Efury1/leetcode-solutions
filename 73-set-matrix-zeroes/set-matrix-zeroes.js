/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // This creates an empty set to reack row indices (i) that contain at least one zero
    const zeroRows = new Set();
    const zeroCols = new Set();
    
    // We are looping through matrix and scanning the matrix
    // i goes over each row
    for (let i = 0; i < matrix.length; i++) {
        // j goes over each column
         for (let j = 0; j < matrix[0].length; j++) {
            // Check whether cells hold a 0
            if (matrix[i][j] === 0) {
                // ZeroRows ia a set, calling add (i) insets the row index i into the set
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }
    

    // overwrite the 0s
    for (let i = 0; i < matrix.length; i++) {
        //
        for (let j = 0; j < matrix[0].length; j++) {
            // has checks whether the exact value is present in the set returning t or f
            if (zeroRows.has(i) || zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};