let mazeGenerationDepthFirstSearch = function(P5) {
  let maze;
  P5.setup = function() {
    P5.createCanvas(300, 300);
    maze = new Maze(P5, 10, 10, 30);
  };
  
  P5.draw = function() {
    P5.background(0);
  };
};

new p5(mazeGenerationDepthFirstSearch, 'maze-generation-depth-first-search');
