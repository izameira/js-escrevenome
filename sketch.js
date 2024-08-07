function setup() {
  createCanvas(800, 800);
  background("white")
}

function draw() {
  stroke("orange");
  fill("pink");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
