let grado = Math.PI/180;
let r = grado;
let t=1;
function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800);
  rectMode(CENTER);
  background(255);
}

function dibujo(x, y, grados, t){
  push();
  translate(x,y);
  rotate(grados);
  rect(0,0,t,t);
  pop();
}

function draw() {
  // put drawing code here
  //background(255)
  for(let i=0; i<5; i++){
    let x = random(0, width);
    let y = random(0, height);
    t+=0.1;
    let rojo = random(0, 255);
    let verde = random(0, 255);
    let azul = random(0, 255);
    fill(rojo, verde, azul, /*100*/);
    dibujo(x, y, r, t);
    //dibujo(300, 100, r);
    r+=grado;
    textSize(32);
    text("👀", mouseX, mouseY);
    noCursor();
  }
  /*push();
  translate(200, 100);
  rotate(r);
  rect(0,0,100,100)
  pop();

  push();
  translate(300, 300);
  rotate(r);
  square(0, 0, 100);
  pop();
  */
}
