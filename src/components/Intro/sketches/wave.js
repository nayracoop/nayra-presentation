const sketch = p5 => {

  p5.disableFriendlyErrors = true; 

  let canvas;
  let r = 600;
  let count = 0;

  let ra = 25;
  let ga = 198;
  let ba = 158;

  let rb = 239;
  let gb = 62;
  let bb = 7;

  let quality = 36;
  const Q = quality + 1;

  p5.setup = () => {
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(4, 9, 13);
    p5.noStroke();
    p5.noFill();
    p5.rectMode(p5.CENTER);
  }

  p5.draw = () => {

    p5.blendMode(p5.BLEND);
    p5.background(4, 9, 13);
    p5.blendMode(p5.ADD);

    let l = 100;
    let time = p5.millis();
    for(let rr = 0; rr < 300; rr += 10) {
      let a = p5.map(p5.sin(p5.radians(p5.frameCount+l)), -1, 1, 0, 1);
      l+=5;
      p5.stroke(ra*a+rb*(1-a), ga*a+gb*(1-a), ba*a+bb*(1-a), 100);
      p5.beginShape();
      for (let angle = 0; angle < 360; angle += Q-quality) {
        let theta = p5.radians(angle);
        let r1 = p5.noise(p5.radians(angle+count/4), p5.frameCount*0.001,rr*0.003);
  
        r1 = p5.map(r1, 0, 1, -p5.height*0.25, p5.height*0.25);
        p5.vertex(p5.map(angle, 0, 360, -100, p5.width+100), p5.sin(2*Math.PI+theta)*1.25*r1+p5.height/2+rr/3+p5.cos(p5.radians(angle+count))*p5.height*0.025);
      }
      p5.endShape();
    }
    count += 1;
    if(p5.millis() - time > 40 && quality > 1) {
      quality--;
    } else if(p5.millis() - time < 20 && quality < Q-1) {
      quality++;
    }
  }

}

export default sketch;