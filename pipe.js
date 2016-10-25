//Making pipes
function Pipe() {
  var spacing = random(60, height/3); //picks a random number between 60 and one third of the height
  var centerY = random (spacing, height - spacing); //the space between the pipes

  this.top = centerY - spacing/2; //top pipe spacing logic/calculations
  this.bottom = height - (centerY + spacing/2) ; //bottom pipe spacing logic/calculations
  this.x = width; //the spawning point of the pipes
  this.w = 25;  //width of the pipes
  this.speed = 2; //speed of the pipes
  this.highlight = false; //hit detection, used for the boolean

  this.hits = function(bird) {  //goes back to the sketch to make the pipes know if they're touched
    if (bird.y < this.top || bird.y > height - this.bottom) { //checks to see if the y-coordinate values are met
      if (bird.x > this.x && bird.x < this.x + this.w) { //checks to see if the x-coordinate values are met
        this.highlight = true; //and if those values are met then it will highlight
        return true; //returns true for the boolean
      }
    }
    this.highlight = false; //doesn't blip by default
    return false; // doesn't return true by default
  }
  this.show = function() {
    noStroke(); //removes pipe stroke
    fill(178,89,89); //pipe color
    if (this.highlight) {//changes the blip's color if the pipe is touched
      fill(255);
    }
    rect(this.x, 0, this.w, this.top); //the top pipe size+location
    rect(this.x, height-this.bottom, this.w, this.bottom); //the bottom pipe size+location
  }
  this.update = function() {
    this.x -= this.speed; //makes the pipe move
  }
  this.offscreen = function() { //works iwth sketch to splice offscreen pipes
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
