class MazeAgent {
  constructor(column, row, maze) {
    this.start = {
      c: column, 
      r: row
    }
    
    this.current = this.start;
    
    this.maze = maze;
    
    this.stack = [];
  }
}