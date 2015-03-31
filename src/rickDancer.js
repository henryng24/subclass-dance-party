var RickDancer = function(top, left, timeBetweenSteps){
  PopDancer.call(this, top, left, timeBetweenSteps);

  this.left = left;
  this.top = top;
  this.$node.addClass('rick');
};

RickDancer.prototype = Object.create(PopDancer.prototype);
RickDancer.prototype.constructor = RickDancer;

RickDancer.prototype.step = function(){
  var oldStep = PopDancer.prototype.step;
  oldStep.call(this);

  this.move();
};

RickDancer.prototype.move = function(){
  var randomMoveTop =  5 - (Math.floor(Math.random() * 10));
  var randomMoveLeft =  5 - (Math.floor(Math.random() * 10));

  this.left += randomMoveLeft;
  this.top += randomMoveTop;

  this.render();
};

RickDancer.prototype.render = function(){
  var styles = {top: this.top + 'px', left: this.left + 'px'};
  this.$node.css(styles);
};

RickDancer.prototype.lineUp = function(pageHeight){
  this.top = pageHeight * Math.random();
  this.left = 280;
  var top = this.top + 'px';
  var left = '280px';
  var style = {top: top, left: left}
  var node = this.$node;

  node.css(style);
};
