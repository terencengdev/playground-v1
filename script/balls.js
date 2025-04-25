document.addEventListener("DOMContentLoaded", () => {
  let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

  // create engine
  let engine = Engine.create(),
    world = engine.world;

  // create renderer
  let render = Render.create({
    element: document.querySelector(".balls"),
    engine: engine,
    options: {
      width: 1200,
      height: 1200,
      wireframes: false,
      background: "#88A750",
    },
  });

  world.gravity.y = 0;

  const WIDTH = render.options.width;
  const HEIGHT = render.options.height;

  Render.run(render);

  // create runner
  var runner = Runner.create();
  Runner.run(runner, engine);

  const wallOPtions = {
    isStatic: true,
    render: {
      fillStyle: "white",
      strokeStyle: "white",
      lineWidth: 5,
    },
  };

  // add bodies
  var stack = Composites.stack(20, 20, 10, 10, 10, 0, function (x, y) {
    return Bodies.circle(x, y, Math.floor(Math.random() * 99) + 70);
  });

  // create two boxes and a ground
  const thickness = 5;
  let topWall = Bodies.rectangle(WIDTH / 2, 0, WIDTH, thickness, wallOPtions);
  let bottomWall = Bodies.rectangle(
    WIDTH / 2,
    HEIGHT,
    WIDTH,
    thickness,
    wallOPtions
  );
  let leftWall = Bodies.rectangle(
    0,
    HEIGHT / 2,
    thickness,
    HEIGHT,
    wallOPtions
  );
  let rightWall = Bodies.rectangle(
    WIDTH,
    HEIGHT / 2,
    thickness,
    HEIGHT,
    wallOPtions
  );

  Composite.add(world, [topWall, bottomWall, leftWall, rightWall, stack]);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.5,
        render: {
          visible: false,
        },
      },
    });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  // Render.lookAt(render, {
  //   min: { x: 0, y: 0 },
  //   max: { x: 800, y: 600 },
  // });
});
