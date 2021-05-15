let mazeGenerationDepthFirstSearch = function (P5) {
    let maze;
    let mazeRenderer;
    P5.setup = function () {
        maze = new Maze(P5, 20, 20, 15);
        mazeRenderer = new MazeRenderer(P5, maze);

        P5.frameRate(5);
        P5.createCanvas(maze.width, maze.height);
    };

    P5.draw = function () {
        P5.background(0);
        maze.update();
        mazeRenderer.draw();
    };
};

new p5(mazeGenerationDepthFirstSearch, 'maze-generation-depth-first-search');
