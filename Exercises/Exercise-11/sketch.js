//draw a spinning octahedron
let cube;

function preload() {
  cube = loadModel('obj/cube.obj');
}

function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(cube);
}