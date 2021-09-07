 var currentRow = // interger value of current row
 var currentColumn = // integer value of current row
 var prevRow = currentRow[] - 1
 var prevColumn = currentColumn - 1
 var nextRow = currentRow[] + 1
 var nextColumn = currentColumn[] + 1

 //Diagonal check
 var currentPosition(currentRow, currentColumn)
 var topLeft(prevRow, prevColumn)
 var topRight(prevRow, nextColumn)
 var bottomLeft(nextRow, prevColumn)
 var bottomRight(nextRow, nextColumn)

 //Left diagonal cross
 if topLeft, currentPosition, BottomRight || currentPosition, topLeft, topleft + 1 || currentPosition, BottomRight, BottomRight + 1

 //Right diagonal cross
 if topRight, currentPosition, BottomLeft || currentPosition, topRight, topRight + 1 || currentPosition, BottomLeft, BottomLeft + 1

 //Vertical check
 if currentRow, nextRow, prevRow || currentRow, nextRow, 2 + currentRow || currentRow, prevRow, currentRow - 2

 //Horizontal check
 if currentColumn, nextColumn, prevColumn || currentColumn, nextColumn, 2 + currentColumn || currentColumn, prevColumn, currentColumn - 2

