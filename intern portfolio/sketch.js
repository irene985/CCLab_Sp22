




// sketch.js
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("myContainer");
}




let sandParts = [];
let tool = "cursor";

function setup() {
  createCanvas(400, 400);

 //can change # of sand parts here 
for (let i=0; i < 1000; i++) {
    let sand = new sandPart(random(width), random(height/2, height));
    sandParts.push(sand);
  }
}

function draw() {
background(137, 209,254,10);
  
  
//sand
  fill(246,215,176, 200);
  stroke(225,191,146);
  rect(0, 150, 800, 400);
   
  for (let i=0; i < sandParts.length; i++) {
      sandParts[i].update();
    sandParts[i].display(); 
  }
  // removing excess sand
  for(let i = sandParts.length -1; i>= 0; i--){
      let s = sandParts[i];
      if (s.delete){
        sandParts.splice(i,1);
      }
    }
  
//ocean
  //fourth wave
  push();
  fill(137, 209,254,200);
  stroke("white");
  ellipse(200, map(sin(frameCount/100), -1, 1, 0, 28), 600, map(sin(frameCount/100), -1, 1, 100, 400));
  pop();  
  //main wave
  push();
  fill(137, 209,254);
  stroke(137, 209, 254);
  strokeWeight(8);
  ellipse(200, map(sin(frameCount/100), -1, 1, 0, 5), 600, map(sin(frameCount/100), -1, 1, 100, 400));
  pop();
  //second wave
  push();
  fill(137, 209,254,45);
  stroke("white");
  ellipse(200, map(sin(frameCount/100), -1, 1, 0, 80), 600, map(sin(frameCount/100), -1, 1, 100, 400));
  pop(); 
  //third wave
  push();
  fill(137, 209,254,65);
  stroke("white");
  ellipse(200, map(sin(frameCount/100), -1, 1, 0, 50), 600, map(sin(frameCount/100), -1, 1, 100, 400));
  pop();
  
  if (keyIsPressed) {
  if (keyCode == 67) {
       tool = "castle";
   } 
  }
  if (tool == "castle") {
 push();
  //castle  
translate(pmouseX, pmouseY)
  push();
//spikes  
  fill("tan");
  rect(89, 90, 10, 11); 
  rect(109, 90, 10, 11); 
  rect(128, 90, 10, 11);
  rect(145, 90, 10, 11); 
  rect(162, 90, 10, 11); 
//house  
  push();
  fill("tan");
  stroke(0)
  noStroke();
  rect(88, 100, 85, 82);
  pop();
//cylincder
  push();
  stroke(0);
  rect(62, 129, 40, 62);
  rect(160, 129, 40, 62);
  noStroke();
  fill("tan");
  ellipse(82, 190, 45,10);
  ellipse(180, 190, 45,10);
  
  stroke(0);
  rect(190, 118, 10, 11); 
  rect(175, 118, 10, 11); 
  rect(160, 118, 10, 11); 

  rect(92, 118, 10, 11);
  rect(77, 118, 10, 11);
  rect(62, 118, 10, 11);
  
  rect(88, 100, 85, 5);
  rect(110, 143, 6, 7);
  rect(128, 143, 6, 7);
  rect(145, 143, 6, 7);
  rect(102, 150, 58, 5); 
   pop();
//window
  arc(131, 135, 23, 40, -PI, 0, CHORD)
  arc(180, 158, 15, 28, -PI, 0, CHORD)
  arc(81.5, 158, 15, 28, -PI, 0, CHORD)
   pop();
 pop(); 
  console.log("sand castle built!")
}
  textSize(12);
  fill(255);
  text("*Welcome to the Koda Beach*",10,15);
   textSize(8)
  text("Press C to build a Sand Castle" ,10,30);
  text("Click on the sand to play with it~ " ,10, 40);
}//draw




class sandPart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.delete = false;
  }
  update() {
    cursor();
    {
      if (dist(this.x, this.y, mouseX, mouseY) <= 100 && mouseIsPressed) {
        this.speedX = random(-2, 2);
        this.speedY = random(-1, 0);
        // ellipse(50, 50, 50, 50);
      }
    }

    this.speedX = this.speedX * 0.99;
    this.x = this.x + this.speedX;
    this.speedY = this.speedY * 0.99;
    this.y = this.y + this.speedY;
  
    if (this.y <= windowHeight/3){
      this.delete = true;
    }
  
  }

  display() {
    fill(242,210,169)
    noStroke()
    ellipse(this.x, this.y, 10, 10);
  }
}


  