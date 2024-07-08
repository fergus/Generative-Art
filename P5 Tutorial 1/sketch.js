console.clear();

var max_points = 200;
var current_point = 0;

function timestamp() {
  const today = new Date();
  const yyyy = today.getFullYear().toString();
  const mm = ("0" + (today.getMonth() + 1)).slice(-2);
  const dd = ("0" + today.getDate()).slice(-2);
  const hh = ("0" + today.getHours()).slice(-2);
  const MM = today.getMinutes();
  console.log(yyyy + mm + dd + hh + MM);
  return(yyyy + mm + dd + hh + MM);
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  noFill();
  stroke(0, 0, 0, 50);
  smooth();
  colorMode();
  strokeCap(SQUARE);
  blendMode(SCREEN);

  while (current_point < max_points) {
    ellipse (random(0,height),random(0,width),10,10);
    current_point++;
  }

  timestamp();
}

function draw() {


}