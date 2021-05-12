class Cell {
    constructor(P5, column, row, cellSize) {
        this.P5 = P5;
        this.column = column;
        this.row = row;
        this.cellSize = cellSize;

        this.isVisited = true;
        this.walls = {
            right: true,
            bottom: true,
        };
    }

    get pixelPos() {
        return this.P5.createVector(
            this.column * this.cellSize,
            this.row * this.cellSize
        );
    }
}
