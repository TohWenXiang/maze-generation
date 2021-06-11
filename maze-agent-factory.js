class MazeAgentFactory {
    static createAgent(P5, column, row, maze) {
        return new MazeAgent(P5, column, row, maze.grid);
    }
}
