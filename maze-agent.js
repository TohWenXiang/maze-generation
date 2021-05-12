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
    this.move(this.current.c, this.current.r - 1);
  }
  
  move(column, row) {
    if(this.grid.isCellIndexOutOfBounds(column, row)) {
      return;
    }
    
    let targetCell = this.grid.getCell(column, row);
    let currentCell = this.grid.getCell(this.current.c, this.current.r);
    let horizontalDir = column - this.current.c;
    let verticalDir = row - this.current.r;
    
    console.log(`${horizontalDir}, ${verticalDir}`);
    
    if(horizontalDir === -1) {
      currentCell.walls.left = false;
    } else if(horizontalDir === 1) {
      targetCell.walls.left = false;
    } else if(verticalDir === -1) {
      currentCell.walls.top = false
    } else if(verticalDir === 1) {
      targetCell.walls.top = false;
    }
    
    targetCell.isVisited = true;
    
    this.current.c = column;
    this.current.r = row;
  }
}