var fr = 60;

function setup() {
    createCanvas(600,600);
    frameRate(fr);
}

var x = 0;

function draw() {
    background('#fae');
    ellipse(mouseX,mouseY,50);
    x++;
}