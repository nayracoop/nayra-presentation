const sketch = p => {

  p.disableFriendlyErrors = true; 

  let canvas;

  p.setup = () => {
    canvas = p.createCanvas(300, 200);
    p.noStroke();
  }

  p.draw = () => {
    p.background('orangered');
    p.ellipse(150, 100, 100, 100);
  }

}

export default sketch;
/*


let r = 600;
let count = 0;

let ra = 25;
let ga = 198;
let ba = 158;

let rb = 239;
let gb = 62;
let bb = 7;

function setup() {

	let ss = 500;
	if(windowWidth < ss) ss = windowWidth;
	if(windowHeight < ss) ss = windowHeight;
	createCanvas(windowWidth, windowHeight, WEBGL);

	blendMode(ADD);
	noFill();
}

function draw() {
  background(4, 9, 13);
  translate(0, 0);
  
  let l = 100;
  for(let rr = 0; rr < 300; rr += 10) {
    let a = map(sin(radians(frameCount+l)), -1, 1, 0, 1);
    l+=5;
    stroke(ra*a+rb*(1-a), ga*a+gb*(1-a), ba*a+bb*(1-a), 100);
    beginShape();
    for (let angle = 0; angle < 360; angle += 1) {
      let theta = radians(angle);
      let r1 = noise(radians(angle+count/4), frameCount*0.001,rr*0.003);
 
      r1 = map(r1, 0, 1, -height*0.25, height*0.25);
      vertex(map(angle, 0, 360, -width*1.2, width*1.2), sin(-0.5*PI+theta)*2*r1+height/3+cos(radians(angle+count))*height*0.05);
    }
    endShape();
  }
  count += 1;
  //r += 5;
  

}*/