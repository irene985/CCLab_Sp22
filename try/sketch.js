let tool = "cursor";

let canvas;

const drawSection = document.getElementById('mySketch');

function setup() {
  canvas = createCanvas(400, 405);
  canvas.position(1750,650);
  textSize(44);
  text("Draw Your Story!", 10, 80);
  textSize(18);
  fill(255, 0, 0);
  text("press 'B' to draw", 30, 150);
  text("press 'E' to erase", 30, 170);
  text("press 'P' for patterns", 30, 190);
  text("press 'C' for a plain cursor", 30, 210)
  text("click for a smiley face stamp", 30, 230);
  text("Lastly, when you're done with your drawing", 25, 270)
  text("double click to clear the canvas!", 30, 290);
}

//clears canvas
function doubleClicked () {
  clear();
  background(255);
  console.log("canvas cleared");
}

function draw() {
 // calling .value() on the element will give you
  // the elements current value
  let name = elem.value();
  console.log('User entered name', name);

  elem = select('#favorite_color');
  let favorite_color = elem.value();
  console.log('Their favorite color is', favorite_color);

  background(favorite_color);
  
  // we can also write to html elements from p5 like so
  let text = random(['Howdy', 'Hello', 'Hi', 'Hallo']) + ' ' + name;
  elem = select('#output');

  // calling .html() on the element will set its content
  // to whatever you give it as the parameter
  elem.html(text);
  <select id="favorite_color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
//defining drawing functions on the keyboard
  if (keyIsPressed) {
    if (keyCode == 66) {
      tool = "brush";
      console.log(tool);
    } else if (keyCode == 69) {
      tool = "eraser";
      console.log(tool);
    }
  }
  if (keyIsPressed) {
    if (keyCode == 80) {
      tool = "random pattern";
      console.log(tool);
    } else if (keyCode == 83) {
      tool = "Stamp";
      console.log(tool);
    }
    else if (keyCode == 67)
      {
        tool = "cursor";
        console.log(tool);
      }
  }
//does the stuff
  if (tool == "brush") {
    stroke(0);
    line(pmouseX, pmouseY, mouseX, mouseY);
  } 
  else if (tool == "eraser") 
  {
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
  }
  if (tool == "random pattern")
    {
      noStroke();
      fill(random(200),random(240),(200));
      ellipse(mouseX, mouseY, random(50), random(50));
      rect(mouseX, mouseY, random(40), random(40))
      frameRate(1000);
      console.log("pattern tool");
    }
 if (tool == "cursor")
   {
     noStroke();
     noFill();
   }
  
//stamp  
fill(220)
mouseClicked();  
}

function drawHappyFace(x,y){
 if(x&&y){
   
   //Face
    stroke("black");
    fill(249,205,173);//beige
    ellipse(pmouseX, pmouseY, 80, 80)
  
   
   //Eye 1
    fill(30);//gray
    ellipse(pmouseX, pmouseY,10,10);
    
   //Eye 2
    ellipse(pmouseX+22, pmouseY,10);
   
   //Mouth
    fill("red");//red
    arc(pmouseX, pmouseY+20, 30, 30, 0, radians(180), PIE);
 }
   
  }
function mouseClicked(){

 if(mouseIsPressed){
   
     drawHappyFace(true,true);   
 }
  
}

{//removes the hide part when the story is submitted to allow everyoneto see it
  drawSection.innerHTML += story;
  drawSection.classList.remove('hide');

//resets the oage so you can do the madlib again (got help for resetting on slackoverflow)
let resetButton = `
    <button id="madlibs-reset" onclick="resetMadLibs()">Play Again</button>
`;
drawSection.innerHTML += resetButton;
}
