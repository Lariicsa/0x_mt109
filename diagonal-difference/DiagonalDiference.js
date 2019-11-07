diagonalDifference = (matrixArr) => {
    let diagonalLeft = 0
    let diagonalRight = 0

    for (let row = 0; row < matrixArr.length; row++) {
        diagonalLeft += matrixArr[row][row]
        diagonalRight += matrixArr[row][matrixArr.length - row - 1]
    }

    return diagonalRight - diagonalLeft
}

//testting with
let matrixArr =
[[1, 2, 3],
[4, 5, 6],
[9, 8, 9]]

diagonalDifference(matrixArr)