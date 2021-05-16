class Maze {
    constructor(P5, columns, rows, cellSize) {
        this.P5 = P5;

        this.grid = new Grid(this.P5, columns, rows, cellSize);

        this.mazeAgents = [];
    }

    get width() {
        return this.grid.width;
    }

    get height() {
        return this.grid.height;
    }

    update() {
        this.mazeAgents.forEach((agent) => {
            agent.update();
        });
    }

    addAgent(agent) {
        this.mazeAgents.push(agent);
    }
}
