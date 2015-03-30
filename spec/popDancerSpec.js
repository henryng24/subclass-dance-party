describe("PopDancer", function() {

  var popDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popDancer = new PopDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a changeColour method", function() {
    expected(popDancer.changeColor).to.be.a('function');
  });

  it("should change colors every step", function() {
    sinon.spy(popDancer, 'changeColor');
    var oldColour = popDancer.currentColour;
    popDancer.step();
    expect(popDancer.changeColor.called).to.be.true;
    expect(oldColour).to.not.equal(popDancer.currentColour);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(popDancer, "step");
      expect(popDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(popDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(popDancer.step.callCount).to.be.equal(2);
    });
  });
});