class MazeAgent {
  constructor(column, row) {
    this.start = {
      c: column, 
      r: row
    }
    
    this.current = this.start;
    
    this.stack = [];
  }
}