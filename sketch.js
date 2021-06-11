let mazeGenerationDepthFirstSearch = function (P5) {
    let maze;
    let mazeAgentFactory;
    let mazeRenderer;
    let frameRateSlider;
    let canvas;

    P5.setup = function () {
        maze = new Maze(P5, 20, 20, 15);

        maze.addAgent(MazeAgentFactory.createAgent(P5, 0, 0, maze));
        maze.addAgent(MazeAgentFactory.createAgent(P5, 19, 19, maze));

        mazeRenderer = new MazeRenderer(P5, maze);

        canvas = P5.createCanvas(maze.width, maze.height).parent(
            'canvas-container'
        );

        frameRateSlider = P5.createSlider(1, 60, 10, 1)
            .parent('settings-container')
            .id('frameRateSlider');
        P5.frameRate(frameRateSlider.value());
    };

    P5.draw = function () {
        P5.frameRate(frameRateSlider.value());
        P5.background(0);
        maze.update();
        mazeRenderer.draw();
    };
};

new p5(mazeGenerationDepthFirstSearch, 'maze-generation-depth-first-search');
