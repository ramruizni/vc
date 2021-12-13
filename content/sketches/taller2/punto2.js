SCALE = 16;

function setup() {
  createCanvas(800, 600);
  stroke(255);
  strokeWeight(0);
  fill(255);
}

function draw() {
  background(0);
  let t = millis();
  put_pixel(1, 1, 255);
  put_pixel(2, 2, 255);
  console.log(mouseY);
  gallina(mouseX / SCALE, mouseY/ SCALE, 40 , 15);
}

function gallina(X0, Y0, X1, Y1) {
  let slope = (Y1 - Y0) / (X1 - X0);
  let x = Math.floor(X0);
  let y = Y0 - (X0 - x) * slope;

  put_pair(x, y, 1 - X0 + x);
  x++;
  y += slope;
  while (x < X1) {
    put_pair(x, y, 1);
    x += 1;
    y += slope;
  }
  put_pair(x, y, 1 - x + X1);
  cross(X0, Y0);
  cross(X1, Y1);
}

function cross(x, y) {
  push();
  const l = 50;
  x += .5;
  y += .5;
  stroke(255, 0, 0);
  strokeWeight(1);
  line(x * SCALE - 30, y * SCALE, x * SCALE + 30, y * SCALE);
  line(x * SCALE, y * SCALE - 30, x * SCALE, y * SCALE + 30);
  pop();
}

function put_pair(x, y, alpha) {
  let z = Math.round(255 * (y - Math.trunc(y)));
  put_pixel(x, y, Math.round((255 - z) * alpha));
  put_pixel(x, y + 1, Math.round(z * alpha));
}

function put_pixel(x, y, color) {
  stroke(color);
  fill(color);
  x = Math.floor(x);
  y = Math.floor(y);
  rect(x * SCALE, y * SCALE, SCALE, SCALE);
}
