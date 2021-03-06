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
}
function draw(){
    background(0);
    for(let i=0;i<particles.length;i++){
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
    }
}