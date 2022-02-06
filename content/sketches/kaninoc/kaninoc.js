let angle = 0;
function setup() {
  createCanvas(700, 700);
  strokeWeight(4)
}

function draw() {
  background(50);
  noStroke();
  fill(255,0,0)
  ellipse(width/2, height/2, 10,10)
  
  for(let i = 15; i< 5000; i+=15)
  {
    push()
    translate(width/2,height/2)
    rotate(i+ angle * 2)
    noFill()
    stroke(20 , i * 100, i -100)
    ellipse(0, 0, i + 15 , i )
    
    pop()
    
    angle += 0.0003
  }
}  




