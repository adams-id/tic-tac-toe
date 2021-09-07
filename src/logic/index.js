/**
 * Generates a 2D array of the cell objects
 * @param {Number} integerBoardSize the number length of the square board
 * @returns 2D array of cellObjects
 */
export const generateBoard2DArray = integerBoardSize => {
    let objectList = [];
    let size = integerBoardSize

    for (let i = 1; size+1 > i; i++) {
        let rowList = [];
        for (let j = 1; size+1 > j; j++) {
            let cellObject = {
                cellId: `row${i}-col${j}`,
                row: i,
                column: j,
                value: ''
            }
            rowList.push(cellObject);
        }
        objectList.push(rowList);
    }
    return objectList;
}
