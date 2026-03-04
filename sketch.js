//Colors
let bgColor = 0;
let r = Math.random()*200 + 55;
let g = Math.random()*200 + 55;
let b = Math.random()*200 + 55;

//Starting position and movement speed
let circlex = 70;
let circley = 270;
let horizontal = 5;
let vertical = 5;

let circle2x = 500;
let circle2y = 280;
let h2 = 5;
let v2 = -5;

let circle3x = 400;
let circle3y = 550;
let h3 = -5;
let v3 = -5;



//Background
function setup() {
  createCanvas(600, 600);
  bgColor = color(0);
}




function randoColors() {
      r = Math.random()*200 + 55;
      g = Math.random()*200 + 55;
      b = Math.random()*200 + 55;
}



function draw() {
  background(bgColor);
  fill(r, g, b);
  ellipse(circlex, circley, 50, 50);
  ellipse(circle2x, circle2y, 50, 50);
  ellipse(circle3x, circle3y, 50, 50);
  
  //Movement
  circlex = circlex + horizontal;
  circley = circley + vertical;
  circle2x = circle2x + h2;
  circle2y = circle2y + v2;
  circle3x = circle3x + h3;
  circle3y = circle3y + v3;
  
  //Bouncing off walls at decent speed
  if (circlex >= 575) {horizontal = -5; randoColors(); bgColor=Math.random()*255;}
  if (circlex <= 25) {horizontal = 5; randoColors(); bgColor=Math.random()*255;}
  if (circley >= 575) {vertical = -5; randoColors(); bgColor=Math.random()*255;}
  if (circley <= 25) {vertical = 5; randoColors(); bgColor=Math.random()*255;}
  
  if (circle2x >= 575) {h2 = -5; randoColors(); bgColor=Math.random()*255;}
  if (circle2x <= 25) {h2 = 5; randoColors(); bgColor=Math.random()*255;}
  if (circle2y >= 575) {v2 = -5; randoColors(); bgColor=Math.random()*255;}
  if (circle2y <= 25) {v2 = 5; randoColors(); bgColor=Math.random()*255;}
  
  if (circle3x >= 575) {h3 = -5; randoColors(); bgColor=Math.random()*255;}
  if (circle3x <= 25) {h3 = 5; randoColors(); bgColor=Math.random()*255;}
  if (circle3y >= 575) {v3 = -5; randoColors(); bgColor=Math.random()*255;}
  if (circle3y <= 25) {v3 = 5; randoColors(); bgColor=Math.random()*255;}
  
  
  //Bump and change color with mouse
  if ((Math.abs(mouseX-circlex)<30) && (Math.abs(mouseY-circley)<30)) {
      if (mouseX>circlex) {horizontal=horizontal-1;} else {horizontal=horizontal+1;}
      if (mouseY>circley) {vertical=vertical-1;} else {vertical=vertical+1;}
  }
  
  if ((Math.abs(mouseX-circle2x)<30) && (Math.abs(mouseY-circle2y)<30)) {
      if (mouseX>circle2x) {h2=h2-1;} else {h2=h2+1;}
      if (mouseY>circle2y) {v2=v2-1;} else {v2=v2+1;}
  }
  
  if ((Math.abs(mouseX-circle3x)<30) && (Math.abs(mouseY-circle3y)<30)) {
      if (mouseX>circle3x) {h3=h3-1;} else {h3=h3+1;}
      if (mouseY>circle3y) {v3=v3-1;} else {v3=v3+1;}
  }
  
}




