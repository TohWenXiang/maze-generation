class MazeRenderer {
    constructor(P5, maze) {
        this.P5 = P5;
        this.grid = maze.grid;
        this.maze = maze;

        this.unVisitedCellColor = this.P5.color(10, 25, 75);
        this.visitedCellColor = this.P5.color(10, 75, 25);
        this.agentCurrentLocationColor = this.P5.color(75, 25, 10);
        this.targetColor = this.P5.color(255, 255, 0);
    }

    draw() {
        this.grid.cells.forEach((cell) => {
            this.drawCell(cell);
            this.drawAgent();
            this.drawWalls(cell);
        });
    }

    drawCell(cell) {
        this.P5.push();
        this.P5.noStroke();
        if (cell.isVisited) {
            this.P5.fill(this.visitedCellColor);
        } else {
            this.P5.fill(this.unVisitedCellColor);
        }

        this.P5.square(cell.pixelPos.x, cell.pixelPos.y, cell.cellSize);
        this.P5.pop();
    }

    drawAgent() {
        this.maze.mazeAgents.forEach((agent) => {
            let currentCell = this.grid.getCell(
                agent.current.c,
                agent.current.r
            );
            let targetCell = this.grid.getCell(agent.target.c, agent.target.r);

            this.P5.push();
            this.P5.noStroke();
            this.P5.fill(this.agentCurrentLocationColor);
            this.P5.square(
                currentCell.pixelPos.x,
                currentCell.pixelPos.y,
                currentCell.cellSize
            );
            this.P5.fill(this.targetColor);
            this.P5.square(
                targetCell.pixelPos.x,
                targetCell.pixelPos.y,
                targetCell.cellSize
            );
            this.P5.pop();
        });
    }

    drawWalls(cell) {
        this.P5.push();
        this.P5.stroke(255);
        if (cell.walls.top) {
            this.P5.line(
                cell.pixelPos.x,
                cell.pixelPos.y,
                cell.pixelPos.x + cell.cellSize,
                cell.pixelPos.y
            );
        }

        if (cell.walls.left) {
            this.P5.line(
                cell.pixelPos.x,
                cell.pixelPos.y,
                cell.pixelPos.x,
                cell.pixelPos.y + cell.cellSize
            );
        }
        this.P5.pop();
    }
}
