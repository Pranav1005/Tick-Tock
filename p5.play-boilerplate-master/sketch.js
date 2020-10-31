var hr, min, sec, hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  hrAngle = map(hr, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWheight(7);
  line(0,0,100,0);
  pop();

}