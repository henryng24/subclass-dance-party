var UserDancer = function(top, left, timeBetweenSteps) {
  PopDancer.call(this, top, left, timeBetweenSteps);
  this.link = $('#link-submit').val();
  this.$node.addClass('user-dancer');
  this.$node.css({background: 'url(' + this.link + ')'});
}

UserDancer.prototype = Object.create(PopDancer.prototype);
UserDancer.prototype.constructor = UserDancer;

