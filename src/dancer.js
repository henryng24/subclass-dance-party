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
  this.reactToNeighbors();
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.reactToNeighbors = function(){
  var neighbors = this._getNeighbors();
  if (neighbors.length > 0) {
    this.$node.addClass('sinking-boat');
  } else {
    this.$node.removeClass('sinking-boat');
  }
};

Dancer.prototype._getNeighbors = function() {
  var neighbors = [];

  for (var i = 0; i < window.dancers.length; i++) {
    if (this === window.dancers[i]) {
      continue;
    }
    var otherCoords = window.dancers[i]._getCoordinates();
    if (this._inProximity(otherCoords)){
      neighbors.push(window.dancers[i]);
    }
  }

  return neighbors;
}

Dancer.prototype._inProximity = function(otherCoords) {
  var coordinates = this._getCoordinates();
  var distance = Math.pow(coordinates[0] - otherCoords[0], 2) + Math.pow(coordinates[1] - otherCoords[1], 2);
  distance = Math.sqrt(distance);

  return distance < 300;
}

Dancer.prototype._getCoordinates = function() {
  var y = this.$node.offset().top + this.$node.height() / 2;
  var x = this.$node.offset().left + this.$node.height() / 2;

  return [x, y];
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
};

Dancer.prototype.lineUp = function(pageHeight){
  var top = pageHeight * Math.random() + 'px';
  var left = '280px';
  var style = {top: top, left: left}
  var node = this.$node;

  node.css(style);
};