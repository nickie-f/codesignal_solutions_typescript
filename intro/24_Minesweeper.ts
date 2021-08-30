/* The idea is to check all the neighbouring cells (in 8 directions). 
If there is a TRUE cell, increase the number of interest by one. Otherwise do nothing. 
Note that the "continue" statement is there in case the number of a cell on the edge of the matrix is being calculated. 
In that case, one or more neibouring cells will have value "undefined".
The rest is quite similar to the previous exercise (#23).
*/
function minesweeper(matrix: boolean[][]): number[][] {
    
    let res: number [][] = []
    let row = matrix.length; let col = matrix[0].length
    for (let r = 0; r < row; r++) {       
        res[r] = []
        for (let c = 0; c < col; c++) {          
            res[r][c] = 0
            for (let i = r-1; i < r+2; i++)  {
                for (let j = c-1; j < c+2; j++) {
                    if (i<0 || j<0 || i >= row || j >= col || (i===r && j===c))  
                        continue
                    if (matrix[i][j]) 
                        res[r][c]++
                }    
            }
        }
    }               
    return res
}