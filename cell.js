class Cell {
    constructor(P5, column, row) {
        this.P5 = P5;
        this.column = column;
        this.row = row;

        this.isVisited = true;
        this.walls = {
            right: true,
            bottom: true,
        };
    }

    get pixelPos() {
        return this.P5.createVector(
            cell.column * this.cellSize,
            cell.row * this.cellSize
        );
    }
}
