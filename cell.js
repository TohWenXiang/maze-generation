class Cell {
    constructor(P5, column, row, cellSize) {
        this.P5 = P5;
        this.column = column;
        this.row = row;
        this.cellSize = cellSize;

        this.isVisited = false;
        this.walls = {
            top: true,
            left: true,
        };
    }

    get pixelPos() {
        return this.P5.createVector(
            this.column * this.cellSize,
            this.row * this.cellSize
        );
    }
}
