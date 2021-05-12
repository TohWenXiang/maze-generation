class MazeAgent {
  constructor(column, row, grid) {
    this.start = {
      c: column, 
      r: row
    }
    
    this.current = this.start;
    
    this.grid = grid;
    
    this.stack = [];
    
    this.move(this.current.c, this. current.r);
  }
  
  update() {
    
  }
  
  move(column, row) {
    let cell = this.grid.getCell(column, row);
    cell.isVisited = true;
    console.log(cell);
  }
}