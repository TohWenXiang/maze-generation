class MazeAgent {
    constructor(column, row, grid) {
        this.start = {
            c: column,
            r: row,
        };

        this.current = this.start;

        this.grid = grid;

        this.stack = [];

        this.initialize();
    }

    initialize() {
        let startCell = this.grid.getCell(this.current.c, this.current.r);
        startCell.isVisited = true;
        this.stack.push(startCell);
    }

    update() {
        while (this.stack.length > 0) {
            let currentCell = this.stack.pop();
            console.log(currentCell);
            this.current.c = currentCell.column;
            this.current.r = currentCell.row;

            let unVisitedNeighbour = this.grid.getRandomUnVisitedNeighbour(
                currentCell.column,
                currentCell.row
            );
            console.log(unVisitedNeighbour);
        }
        //this.move(1, 0);
    }

    move(moveColumn, moveRow) {
        let target = {
            c: this.current.c + moveColumn,
            r: this.current.r + moveRow,
        };

        if (this.grid.isCellIndexOutOfBounds(target.c, target.r)) {
            return;
        }

        let targetCell = this.grid.getCell(target.c, target.r);
        let currentCell = this.grid.getCell(this.current.c, this.current.r);

        if (moveColumn === -1) {
            currentCell.walls.left = false;
        } else if (moveColumn === 1) {
            targetCell.walls.left = false;
        } else if (moveRow === -1) {
            currentCell.walls.top = false;
        } else if (moveRow === 1) {
            targetCell.walls.top = false;
        }

        targetCell.isVisited = true;

        this.current = target;
    }
}
