class Maze {
  constructor(P5, columns, rows, cellSize) {
    this.P5 = P5;
    
    this.grid = new Grid(this.P5, columns, rows, cellSize);
  }
}