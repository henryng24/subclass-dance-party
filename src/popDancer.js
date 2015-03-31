var PopDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.currentColor = this._generateColor();

}

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {
  var oldStep = Dancer.prototype.step;
  oldStep.call(this);

  this.changeColor();
};

PopDancer.prototype.changeColor = function() {
  this.currentColor = this._generateColor();

  var r = this.currentColor[0];
  var g = this.currentColor[1];
  var b = this.currentColor[2];
  this.$node.css({border: '10px solid rgb(' + r + ', ' + g + ',' + b +')'});
};

PopDancer.prototype._generateColor = function() {
  return [(Math.floor(Math.random()*255)), (Math.floor(Math.random()*255)), (Math.floor(Math.random()*255))];
};