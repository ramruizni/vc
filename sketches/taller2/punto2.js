const SCALE = 10;

function setup() {
    createCanvas(600, 600);
    stroke(255);
    strokeWeight(0);
    fill(255);
    ellipseMode(RADIUS);
}

function draw() {
    background(0);

    drawLine(circles[0].x / SCALE, circles[0].y / SCALE, circles[1].x / SCALE, circles[1].y / SCALE);

    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        noStroke();
        fill(circle.color);
        ellipse(circle.x, circle.y + (SCALE / 2), radius, radius);
    }
}

function drawLine(x1, y1, x2, y2) {
    let slope = (y2 - y1) / (x2 - x1);
    let x = Math.floor(x1);
    let y = y1 - (x1 - x) * slope;

    putPair(x, y, 1 - x1 + x);
    x++;
    y += slope;
    while (x < x2) {
        putPair(x, y, 1);
        x += 1;
        y += slope;
    }
    putPair(x, y, 1 - x + x2);
}

function putPair(x, y, alpha) {
    let z = Math.round(255 * (y - Math.trunc(y)));
    putPixel(x, y, Math.round((255 - z) * alpha));
    putPixel(x, y + 1, Math.round(z * alpha));
}

function putPixel(x, y, color) {
    stroke(color);
    fill(color);
    x = Math.floor(x);
    y = Math.floor(y);
    rect(x * SCALE, y * SCALE, SCALE, SCALE);
}


/*
--------------------------------------------------------------------------------------------------
  DRAG AND DROP FUNCTIONALITY
  Part taken from: https://codepen.io/jacorre/pen/bgbNXr
 */

const radius = 20;
const COLOR_DISABLED = '#b2b2b2';
const COLOR_ENABLED = '#343434';
const circles = [
    {x: 50, y: 300, color: COLOR_DISABLED, active: false},
    {x: 550, y: 300, color: COLOR_DISABLED, active: false},
]

function mousePressed() {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i],
            distance = dist(mouseX, mouseY, circle.x, circle.y);
        if (distance < radius) {
            circle.active = true;
            circle.color = COLOR_ENABLED;
        } else {
            circle.active = false;
            circle.color = COLOR_DISABLED;
        }
    }
    return false;
}

function mouseDragged() {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        if (circle.active) {
            circle.x = mouseX;
            circle.y = mouseY;
            break;
        }
    }
    return false;
}

function mouseReleased() {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        circle.active = false;
        circle.color = COLOR_DISABLED;
    }
    return false;
}
/*
--------------------------------------------------------------------------------------------------
*/
