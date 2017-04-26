import Victor from 'victor';

export default function Pod(position, lifespan, hasBoost, nextCPPos, nextCPDist, nextCPAngle) {
  this.position = position;
  this.lifespan = lifespan;
  this.hasBoost = hasBoost;
  this.nextCPPos = nextCPPos;
  this.nextCPDist = nextCPDist;
  this.nextCPAngle = nextCPAngle;
}

Pod.prototype.clone = function () {
  return new Pod(this.position, this.lifespan, this.hasBoost, this.nextCPPos, this.nextCPDist, this.nextCPAngle);
};

Pod.prototype.move = function() {
  let thrust = Math.round(((180 - Math.abs(this.nextCPAngle)) / 180) * 100);
  print(`${this.nextCPPos.x} ${this.nextCPPos.y} ${thrust}`);
}

export function createPod(inputs, isItMine, lifespan, hasBoost) {
  if (isItMine) {
    return new Pod(new Victor(+inputs[0], +inputs[1]), lifespan, hasBoost, new Victor(+inputs[2], +inputs[3]), +inputs[4], +inputs[5]);
  } else {
    return new Pod(new Victor(+inputs[0], +inputs[1]));
  }
}