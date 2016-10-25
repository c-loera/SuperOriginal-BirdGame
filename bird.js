function Bird() {
  //"this.y" is the initial y-coordinate when the file loads...
  //...it changes throughout due to 'gravity'
  this.y = height/2;
  //"this.x" is the initial x-coordinate-which doesn't change...
  //...unlike the y-coordinate due to this not being affected...
  //...in the flappybird game
  this.x = 64;
  //Movements
  this.gravity = 0.6; //pushes the bird down
  this.lift = -20; //pushes the bird up per space key press
  this.velocity = 0; //velocity which counteracts gravity if, say the bird, is being pushed upwards
  //the 'bird' design/shape+color
  this.show = function() {
    noStroke();
    fill(178,178,173);
    ellipse(this.x, this.y, 32, 32);
  }
  //where the variables are used in order to animate the 'bird'...
  //lifts the bird
  this.up = function() {
    this.velocity += this.lift;
  }
  //SPEED!, GRAVITY!, VELOCITY!
  this.update = function() {
    this.velocity += this.gravity; //pushes the bird down
    this.velocity *= 0.9; //limits the max velocity
    this.y += this.velocity; //gives the bird a starting 'velocity' to tack onto
    //stops it from going off the bottom side of the screen
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    //stops it from going off the top side of the screen
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
