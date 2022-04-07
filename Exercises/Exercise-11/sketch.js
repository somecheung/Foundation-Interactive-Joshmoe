//draw a spinning octahedron
let cube;
let sphere;


function preload() {
  cube = loadModel('obj/cube.obj');
   sphere = loadModel('obj/sphere.obj');
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(200);
  ambientLight(0,0,255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  translate(0,0,0);
  model(cube);
  model(sphere);
}