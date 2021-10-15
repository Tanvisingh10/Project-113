function preload(){
}

function setup(){
    canvas = createCanvas(1000, 700);
    canvas.position(200, 245);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 10,10,800,450);

    fill(0,128,0);
  stroke(0,128,0);
  circle(12,17,35);
  
   
  fill(255,0,0);
  stroke(255,0,0);
  rect(22, 8, 780, 15);
  
  
  fill(0,128,0);
  stroke(0,128,0);
  circle(795,17,35);

  fill(0,128,0);
  stroke(0,128,0);
  circle(12,450,35);
  
   
  fill(255,0,0);
  stroke(255,0,0);
  rect(22, 450, 780, 15);
    
  fill(0,128,0);
  stroke(0,128,0);
  circle(799,450,35);

  fill(255,0,0);
  stroke(255,0,0);
  rect(798, 20, 15, 420);

  fill(255,0,0);
  stroke(255,0,0);
  rect(7,20, 15, 420);
}
function take_snapshot(){
    save('Tanvi.png');
}