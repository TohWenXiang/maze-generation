class Cell {
  constructor(P5, column, row) {
    this.P5 = P5;
    this.column = column;
    this.row = row;
    
    this.isVisited = false;
    this.walls = {
      top: false, 
      right: false,
      bottom: false, 
      left: false
    };
  }
}