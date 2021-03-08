var WidthW;
var HeightW;
var centerX;
var centerY;
var rad;
var nrC;
var varr=0;
var boxW;
var whiteIntensity;
var varrChangeRate=0.2;

function Oscilation(centerX, centerY, rad, nrC, boxW, whiteIntensity){
    
    for(let radi=rad/nrC; radi<=rad; radi+=rad/nrC){
    for (let angle = PI/2; angle <= 3*PI/2; angle +=(300*0.05/radi)) {
        stroke((sin(radi/30+varr)+1)*whiteIntensity);
        strokeWeight(3);
        point((int)(cos(angle)*radi) + centerX-boxW/2,(int)(sin(angle)*radi) + centerY );
     }
 
     for(let x=centerX-boxW/2; x<=centerX+boxW/2; x+=15){
        stroke((sin(radi/30+varr)+1)*whiteIntensity);
        strokeWeight(3);
        point(x,centerY+radi);
        point(x,centerY-radi);
     }
 
     for (let angle = 3/2*PI; angle <=5/2* PI ; angle += (300*0.05/radi)) {
         stroke((sin(radi/30+varr)+1)*whiteIntensity);
         strokeWeight(3);
         point((int)(cos(angle)*radi) + centerX+boxW/2,(int)(sin(angle)*radi) + centerY );
      }
 }
}

class Particle{
    constructor(){
        this.x=random(0, width);
        this.y=random(0,height);
        this.r=random(1,8);
        this.xSpeed=random(-2,2);
        this.ySpeed=random(-1,1.5);
    }
    createParticle(){
        noStroke();
        fill('rgba(228,251,255,0.5)');
        circle(this.x,this.y,this.r);
    }
    moveParticle(){
        if(this.x<0||this.x>width){
            this.xSpeed*=-1;
        }
        if(this.y<0||this.y>height){
            this.ySpeed*=-1;
        }
        this.x+=this.xSpeed;this.y+=this.ySpeed;
    }
    joinParticles(particle){
        particle.forEach(element => {
            let dis=dist(this.x,this.y,element.x,element.y);
            if(dis<=85){
                strokeWeight(1);
                stroke('rgba(68,10,103,0.6)');
                line(this.x,this.y,element.x,element.y);
            }
        });
    }
}

let particles = []
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);
    for(let i=0;i<width/7;i++){
        particles.push(new Particle());
    }
    WidthW=windowWidth;
    HeightW=windowHeight;
    centerX=WidthW*1.5/10;
    centerY=HeightW*6/10;
    rad = HeightW/8;
    nrC=20;
    varr=0;
    boxW = WidthW/10;
    whiteIntensity=30;
}




function draw(){
    background(0);
    for(let i=0;i<particles.length;i++){
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
    }
    Oscilation(centerX,centerY,rad,nrC,boxW,whiteIntensity);
    Oscilation(windowWidth*8.5/10,centerY,rad,nrC,boxW,whiteIntensity);
    varr+=varrChangeRate;
  

}