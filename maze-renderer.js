class MazeRenderer {
    constructor(P5, maze) {
        this.P5 = P5;
        this.grid = maze.grid;
    }

    draw() {
        this.P5.stroke(255);
        this.drawWalls();
    }

    drawWalls() {
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
    }
}
