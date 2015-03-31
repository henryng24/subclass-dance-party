describe("RickDancer", function() {

  var rickDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rickDancer = new RickDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(rickDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a changeColor method", function() {
    expect(rickDancer.changeColor).to.be.a('function');
  });

  it("should have a move method", function(){
    expect(rickDancer.move).to.be.a('function');
  });

  it("should change colors every step", function() {
    sinon.spy(rickDancer, 'changeColor');
    var oldColour = rickDancer.currentColor;
    rickDancer.step();
    expect(rickDancer.changeColor.called).to.be.true;
    expect(oldColour).to.not.eql(rickDancer.currentColor);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(rickDancer, "step");
      expect(rickDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rickDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rickDancer.step.callCount).to.be.equal(2);
    });

    it("should change position at least once per second", function(){
      var oldPosition = [rickDancer.top, rickDancer.left];
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(oldPosition).to.not.eql([rickDancer.top, rickDancer.left])
    });
  });
});

