class Grid {
  constructor(P5, columns, rows, cellSize) {
    this.P5 = P5;
    
    this.columns = columns;
    this.rows = rows;
    this.cellSize = cellSize;
    
    this.cells = new Array(this.columns * this.rows);
    
    this.fillCells();
  }
  
  fillCells() {
    for(let r = 0; r < this.rows; r++) {
      for(let c = 0; c < this.columns; c++) {
        this.cells[r * this.columns + c] = new Cell(this.P5, c, r);
      }
    }
  }
  
  isCellIndexOutOfBounds(column, row) {
    if(
      column < 0 || 
      column >= this.columns || 
      row < 0 || 
      row >= this.rows
      ) {
      return true;
    }
    return false;
  }
  
  getCell(column, row) {
    if(this.isCellIndexOutOfBounds(column, row)) {
      return undefined;
    }
    return this.cells[row * this.columns + column];
  }
  
  getNeighbouringCells(column, row) {
    let neighbouringCells = [];
    
    for(let r = row - 1; r <= row + 1; r++) {
      for(let c = column - 1; c <= column + 1; c++) {
        if(
          c === column && 
          r === row
          ) {
          continue;
        }
        
        neighbouringCells.push(this.getCell(c, r));
      }
    }
    return neighbouringCells;
  }
}