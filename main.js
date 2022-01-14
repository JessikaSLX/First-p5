function preload() {
    img=loadImage('https://c.tenor.com/dWvXm7ovhfcAAAAC/love-hearts.gif');
    }
    
    function setup() {
    createCanvas(700,700);
    }
    
    function draw() {
    image(img,300,220,150,120);
    
    fill(255, 0, 0);
    stroke(0, 255, 0);
    rect(600,150,20,250);
      
    fill(255, 0, 0);
    stroke(0, 255, 0);
    rect(150,150,20,250);
      
    fill(255, 0, 0);
    stroke(0, 255, 0);
    rect(150,150,450,20);
      
    fill(255, 0, 0);
    stroke(0, 255, 0);
    rect(150,400,450,20);
      
    fill(255,102, 178);
    stroke(0, 0, 255);
    ellipse(160, 160, 55, 55);
      
    fill(255,102, 178);
    stroke(0, 0, 255);
    ellipse(610, 160, 55, 55);
    
    fill(255,102, 178);
    stroke(0, 0, 255);
    ellipse(610, 410, 55, 55);
      
    fill(255,102, 178);
    stroke(0, 0, 255);
    ellipse(160, 410, 55, 55);
    }