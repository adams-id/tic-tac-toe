/**
 * Get an object of 4 arrays that contain cells from the 4 directions that a
 * cell can be part of a winning move.
 * @param {Number} boardSize the size of the current game board
 * @param {Number} rowPosition the row position of the cell
 * @param {NUmber} colPosition the column position of the cell
 * @returns an object of the arrays
 */
export const getCellArrays = (boardSize, rowPosition, colPosition) => {
    let rowArray = [];
    let colArray = [];

    // Get row array
    for (let j = 1; j < boardSize + 1; j++) {
        rowArray.push({
            row: rowPosition,
            col: j,
        })
    }

    // Get column array
    for (let i = 1; i < boardSize + 1; i++) {
        colArray.push({
            row: i,
            col: colPosition
        })
    }

    // Get forward Diagonal 
    let forwardDiagonalArray = getForwardDiagonal(boardSize, rowPosition, colPosition);

    // Get backward Diagonal
    let backwardDiagonalArray = getBackwardDiagonal(boardSize, rowPosition, colPosition);

    return {
        rowArray: rowArray,
        colArray: colArray,
        forwardDiagonalArray: forwardDiagonalArray,
        backwardDiagonalArray: backwardDiagonalArray
    }
}

/**
 * Checks if an array contains a winning combination.
 * 
 * A winning combination would a case where the same winString appears
 * consecutively for a number of times. The winLength defines these number of times.
 * @param {{row, col}[]} cellArray the array to check for a win
 * @param {{cellId, row, column, value}[][]} board2DArray the 2D board array to check through for a win
 * @param {Number} winLength the number of consecutive repititions required for a win
 * @param {String} winString the winning string to check for
 * @returns an object containing a boolean `win` that indicates whether there was a winning combination
 */
export const checkWin = (cellArray, board2DArray, winLength, winString) => {

    const prev = {
        streak: [],
        count: 0
    };
    for (let i = 0; i < cellArray.length; i++) {
        const currRow = cellArray[i].row;
        const currCol = cellArray[i].col;
        const currValue = board2DArray[currRow - 1][currCol - 1].value;

        const { streak, count } = prev;
        if (count === winLength-1 && currValue === winString) {
            streak.push(cellArray[i])
            return {
                win: true,
                winCells: [...streak]
            }
        }

        if (currValue === winString) {
            prev.count = count + 1;
            streak.push(cellArray[i]);
            prev.streak = streak;
        } else {
            prev.count = 0;
            prev.streak = [];
        }
    }

    return {
        win: false,
        winCells: []
    }
}

/**
 * Get the first diagonal array of the items involving the cell
 * @param {Number} boardSize the size of the current game board
 * @param {Number} rowPosition the row position of the cell
 * @param {NUmber} colPosition the column position of the cell
 * @returns an array of the first diagonal containing the cell
 */
const getForwardDiagonal = (boardSize, rowPosition, colPosition) => {
    let diagonalArray = [{
        row: rowPosition,
        col: colPosition
    }];

    let subRow = rowPosition - 1;
    let subCol = colPosition - 1;
    // Subtract rows and columns till one of them is 1
    // and push each to the beginning
    while(subRow > 0 && subCol > 0) {
        diagonalArray.unshift({ row: subRow, col: subCol });
        subRow--;
        subCol--;
    }

    let addRow = rowPosition + 1;
    let addCol = colPosition + 1;
    // Add rows and columns till one of them is the boardSize
    // and push each to the end of the array
    while(addRow < boardSize + 1 && addCol < boardSize + 1) {
        diagonalArray.push({ row: addRow, col: addCol });
        addRow++;
        addCol++;
    }

    return diagonalArray;
}

/**
 * Get the second diagonal array of the items involving the cell
 * @param {Number} boardSize the size of the current game board
 * @param {Number} rowPosition the row position of the cell
 * @param {NUmber} colPosition the column position of the cell
 * @returns an array of the second diagonal containing the cell
 */
const getBackwardDiagonal = (boardSize, rowPosition, colPosition) => {
    let diagonalArray = [{
        row: rowPosition,
        col: colPosition
    }];

    let subRow = rowPosition - 1;
    let addCol = colPosition + 1;
    // Subtract rows and add columns
    while(subRow > 0 && addCol < boardSize + 1) {
        diagonalArray.push({ row: subRow, col: addCol })
        subRow--;
        addCol++;
    }

    let addRow = rowPosition + 1;
    let subCol = colPosition - 1;
    // Add rows and subtract columns
    while(addRow < boardSize + 1 && subCol > 0) {
        diagonalArray.unshift({ row: addRow, col: subCol })
        subCol--;
        addRow++;
    }

    return diagonalArray;
}

