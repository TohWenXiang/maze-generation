let mazeGenerationDepthFirstSearch = function(P5) {
  let maze;
  let mazeRenderer;
  P5.setup = function() {
    P5.createCanvas(300, 300);
    maze = new Maze(P5, 20, 20, 15);
    mazeRenderer = new MazeRenderer(P5, maze);
  };
  
  P5.draw = function() {
    P5.background(0);
    mazeRenderer.draw();
  };
};

new p5(mazeGenerationDepthFirstSearch, 'maze-generation-depth-first-search');
