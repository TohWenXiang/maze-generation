import MazeAgent from './maze-agent.js';
export default class MazeAgentFactory {
  static createAgent(P5, column, row, maze) {
    return new MazeAgent(P5, column, row, maze.grid);
  }
}
