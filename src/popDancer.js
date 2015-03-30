var PopDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.currentColour = this._generateColor();

}

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {
  var oldStep = Dancer.prototype.step;
  oldStep.call(this);
  
  this.currentColour = this._generateColor();
  var r = this.currentColour[0];
  var g = this.currentColour[1];
  var b = this.currentColour[2];
  this.$node.css({border: '10px solid rgb(' + r + ', ' + g + ',' + b +')'});
}

PopDancer.prototype._generateColor = function() {
  return [(Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255))];
}