//Initializtion of variables
var bird; //bird
var pipes = []; //creates an empty array so pipes could be created

function setup() {
  createCanvas(400, 600); //canvas size!
  bird = new Bird(); //makes the bird
  pipes.push(new Pipe()); //makes a the pipe
}

function draw() {
  background(248,248,178); //background...color!!!
  //PIPES
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show(); //makes the pipes visible
    pipes[i].update(); //updates the pipe count
    if (pipes[i].hits(bird)) { //makes the pipes 'blip'
      //console.log("HIT");
    }
    if (pipes[i].offscreen()) { //removes pipes that go offscreen
      pipes.splice(i, 1);
    }
  }
  //BIRD
  bird.update(); //keeps the bird checked
  bird.show(); //makes the bird visible
  if (frameCount % 100 == 0) { //creates a pipe each 100 frames
    pipes.push(new Pipe());
  }
}
function keyPressed() { //checks to see if space is pressed...
  if (key == ' ') { //...if it is then the bird will move up
    bird.up();
  }
}
