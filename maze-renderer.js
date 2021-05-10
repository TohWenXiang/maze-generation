class MazeRenderer {
    constructor(P5, maze) {
        this.P5 = P5;
        this.grid = maze.grid;

        this.unVisitedCellColor = this.P5.color(10, 25, 75);
        this.visitedCellColor = this.P5.color(10, 75, 25);
    }

    draw() {
        this.drawUnvisitedCells();
        this.drawVisitedCells();
        this.drawWalls();
    }

    drawUnvisitedCells() {
        this.P5.push();
        this.P5.noStroke(this.unVisitedCellColor);
        this.P5.fill(10, 25, 75);
        this.grid.cells
            .filter((cell) => {
                return !cell.isVisited;
            })
            .forEach((cell) => {
                this.P5.square(
                    cell.column * this.grid.cellSize,
                    cell.row * this.grid.cellSize,
                    this.grid.cellSize
                );
            });
        this.P5.pop();
    }

    drawVisitedCells() {
        this.P5.push();
        this.P5.noStroke();
        this.P5.fill(this.visitedCellColor);
        this.grid.cells
            .filter((cell) => {
                return cell.isVisited;
            })
            .forEach((cell) => {
                this.P5.square(
                    cell.column * this.grid.cellSize,
                    cell.row * this.grid.cellSize,
                    this.grid.cellSize
                );
            });
        this.P5.pop();
    }

    drawWalls() {
        this.P5.push();
        this.P5.stroke(255);
        this.grid.cells.forEach((cell) => {
            let x1 = cell.column * this.grid.cellSize;
            let x2 = x1 + this.grid.cellSize;
            let y1 = cell.row * this.grid.cellSize;
            let y2 = y1 + this.grid.cellSize;

            if (cell.walls.right) {
                this.P5.line(x2, y1, x2, y2);
            }

            if (cell.walls.bottom) {
                this.P5.line(x1, y2, x2, y2);
            }
        });
        this.P5.pop();
    }
}
