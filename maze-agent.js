class MazeAgent {
  constructor(column, row, grid) {
    this.start = {
      c: column, 
      r: row
    }
    
    this.current = this.start;
    
    this.grid = grid;
    
    this.stack = [];
  }
}