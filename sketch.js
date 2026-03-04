//Colors
let bgColor;
let r = Math.random()*200 + 55;
let g = Math.random()*200 + 55;
let b = Math.random()*200 + 55;

//Starting position and movement speed
let circlex = 70;
let circley = 270;
let horizontal = 1;
let vertical = 1;



//Background
function setup() {
  createCanvas(400, 400);
  bgColor = color(0);
}



function draw() {
  background(bgColor);  //Remove this line for a different kind of fun
  fill(r, g, b);
  ellipse(circlex, circley, 50, 50);
  
  //Movement
  circlex = circlex + horizontal;
  circley = circley + vertical;
  
  //Bouncing off walls at normal speed
  if (circlex >= 375) {horizontal = -5;}                                   
  if (circlex <= 25) {horizontal = 5;}
  if (circley >= 375) {vertical = -5;}
  if (circley <= 25) {vertical = 5;}
  
  
  
  //Bump and change color of circle with mouse
  if ((Math.abs(mouseX-circlex)<30) && (Math.abs(mouseY-circley)<30)) {
    
      r = Math.random()*200 + 55;
      g = Math.random()*200 + 55;
      b = Math.random()*200 + 55;
    
      if (mouseX>circlex) {horizontal=horizontal-1;} else {horizontal=horizontal+1;}
      if (mouseY>circley) {vertical=vertical-1;} else {vertical=vertical+1;}
    
      }
  
  
  
  
  
  
  
  
  //Previous thing (horizontal movement before vertical movement)
  //if (circlex > mouseX) { circlex -= 5; } else { circlex += 5; }
  //if ((circley > mouseY) && (mouseX-Math.abs(circlex)<10)) { circley -= 5; }
  //if ((circley < mouseY) && (mouseX-Math.abs(circlex)<10)) { circley += 5; }
  
}

