export default class MazeAgent {
  constructor(P5, column, row, grid) {
    this.P5 = P5;

    this.start = {
      c: column,
      r: row,
    };

    this.current = this.target = this.start;

    this.grid = grid;

    this.stack = [];

    this.initialize();
  }

  initialize() {
    // 1.   Choose the initial cell, mark it as visited and push it to the stack
    let startCell = this.grid.getCell(this.current.c, this.current.r);
    startCell.isVisited = true;
    this.stack.push(startCell);
  }

  update() {
    // 2.   While the stack is not empty, switch to while loop for instant generation
    //while (this.stack.length > 0) {
    if (this.stack.length > 0) {
      // 2.1    Pop a cell from the stack and make it a current cell
      let currentCell = this.stack.pop();
      this.current.c = currentCell.column;
      this.current.r = currentCell.row;

      let unvisitedNeighbours =
        this.grid.getUnvisitedAdjacentNeighbours(
          currentCell.column,
          currentCell.row
        );

      // 2.2   If the current cell has any neighbours which have not been visited
      if (unvisitedNeighbours.length > 0) {
        // 2.2.1    Push the current cell to the stack
        this.stack.push(currentCell);

        // 2.2.2    Choose one of the unvisited neighbours
        let randomUnvisitedNeighbour = this.P5.random(
          unvisitedNeighbours
        );
        this.target.c = randomUnvisitedNeighbour.column;
        this.target.r = randomUnvisitedNeighbour.row;

        // 2.2.3    Remove the wall between the current cell and the chosen cell
        this.grid.removeWalls(currentCell, randomUnvisitedNeighbour);

        // 2.2.4    Mark the chosen cell as visited and push it to the stack
        randomUnvisitedNeighbour.isVisited = true;
        this.stack.push(randomUnvisitedNeighbour);
      }
    }
  }
}
