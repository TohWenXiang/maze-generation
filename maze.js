class Maze {
    constructor(P5, columns, rows, cellSize) {
        this.P5 = P5;

        this.grid = new Grid(this.P5, columns, rows, cellSize);

        this.mazeAgent = new MazeAgent(P5, 0, 0, this.grid);
    }

    get width() {
        return this.grid.width;
    }

    get height() {
        return this.grid.height;
    }

    update() {
        this.mazeAgent.update();
    }
}
