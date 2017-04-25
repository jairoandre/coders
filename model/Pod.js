import Victor from 'victor';

function Pod(position, lifespan, boostsLeft, nextCheckPointPos, nextCheckPointDist, nextCheckPointAngle) {
  this.position = position;
  this.lifespan = lifespan;
  this.boostsLeft = boostsLeft;
  this.nextCheckPointPos = nextCheckPointPos;
  this.nextCheckPointDist = nextCheckPointDist;
  this.nextCheckPointAngle = nextCheckPointAngle;
}

Pod.prototype.clone = function () {
  return new Pod(this.position, this.lifespan, this.boostsLeft, this.nextCheckPointPos, this.nextCheckPointDist, this.nextCheckPointAngle);
};

function createPod(inputs, myPod, lifespan, boostsLeft) {
  if (myPod) {
    return new Pod(new _victor2.default(+inputs[0], +inputs[1]), lifespan, boostsLeft, new _victor2.default(+inputs[2], +inputs[3]), +inputs[4], +inputs[5]);
  } else {
    return new Pod(new _victor2.default(+inputs[0], +inputs[1]));
  }
}