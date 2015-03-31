// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
//
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

Dancer.prototype.lineUp = function(pageHeight){
  var top = pageHeight * Math.random() + 'px';
  var left = '280px';
  var style = {top: top, left: left}
  var node = this.$node;

  node.css(style);
};