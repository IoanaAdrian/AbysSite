function preload(){
    bicicleta = loadModel("./../models/bicicleta.stp")
}

function setup(){
    createCanvas(400,400);
    background(0);
}
var angle=0;
function draw(){
    ambientLight(0);
    directionalLight(255,255,255,0,0,1);
    rotateX(angle);
    rotateY(angle*1.3);
    rotateZ(angle*0.7);
    model(bicicleta);
    angle+=0.03;
}