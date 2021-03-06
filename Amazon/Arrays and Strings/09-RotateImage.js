/*
You are given an n x n 2D matrix representing an 
image, rotate the image by 90 degrees (clockwise).
*/

function rotate(matrix){
    for (let i = 0; i < matrix.length; i++){
        for (let j = i + 1; j < matrix[i].length; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < matrix.length; i++){
        matrix[i].reverse();
    }
}