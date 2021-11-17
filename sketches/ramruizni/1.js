// 7776FF
// E67F39

const SCREEN_WIDTH = 500
const SCREEN_HEIGHT = 400

const DIAMETER_MID = 50
let DIAMETER_OUT = 140

const RADIUS_MID = 50
let RADIUS_OUT = 100

let d = 0

function toRadians(degrees) {
  return degrees * (Math.PI / 180)
}

function getX(xCenter, radius, offset) {
  return xCenter + radius * Math.cos(toRadians(d + offset))
}

function getY(yCenter, radius, offset) {
  return yCenter - radius * Math.sin(toRadians(d + offset))
}

function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT)
  //frameRate(1);
  background('#CCCCCC')
}

function rotateCircle() {
  if ((d > 0 && d <= 90) || (d > 180 && d <= 270)) {
    DIAMETER_OUT -= 1.4
    RADIUS_OUT -= 0.7
  } else {
    DIAMETER_OUT += 1.4
    RADIUS_OUT += 0.7
  }
  if (d < 360) {
    d += 1
  } else {
    d = 0
  }
}

function draw() {
  background('#CCCCCC')

  const midX = getX(SCREEN_WIDTH / 2, RADIUS_MID, 0)
  const midY = getY(SCREEN_HEIGHT / 2, RADIUS_MID, 0)
  circle(midX, midY, DIAMETER_MID)
  fill(color('#7776FF'))

  const outX = getX(midX, RADIUS_OUT, 0)
  const outY = getY(midY, RADIUS_OUT, 0)
  circle(outX, outY, DIAMETER_OUT)

  const inX = getX(midX, RADIUS_OUT, 180)
  const inY = getY(midY, RADIUS_OUT, 180)
  circle(inX, inY, DIAMETER_OUT)

  const topX = getX(midX, RADIUS_OUT, 90)
  const topY = getY(midY, RADIUS_OUT, 90)
  circle(topX, topY, DIAMETER_OUT)

  const botX = getX(midX, RADIUS_OUT, 270)
  const botY = getY(midY, RADIUS_OUT, 270)
  circle(botX, botY, DIAMETER_OUT)
  fill(color('#E67F39'))

  noStroke()
  rotateCircle()
}
