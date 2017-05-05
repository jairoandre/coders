import Victor from 'victor';

Victor.prototype.setLength = function (scalar) {
    var length = this.length();
    if (scalar >= 0 && length !== 0) {
        var sinA = this.y / length;
        var sinB = this.x / length;
        this.y = sinA * scalar;
        this.x = sinB * scalar;
    }
    return this;
};

function normalizeAngle(angle) {
  return angle < 0 ? (360 + angle) : angle;
}

export default function Pod(position, lifespan, hasBoost, nextCPPos, nextCPDist, nextCPAngle, velocity) {
  this.position = position;
  this.lifespan = lifespan;
  this.hasBoost = hasBoost;
  this.velocity = velocity;
  this.nextCPPos = nextCPPos;
  this.nextCPDist = nextCPDist;
  this.nextCPAngle = normalizeAngle(nextCPAngle);

  // Derivaded attributes
  this.nextCPPosAngle = nextCPPos ? Math.floor(nextCPPos.angleDeg()) : undefined;
  this.desiredVector = nextCPPos ? nextCPPos.clone().subtract(position) : undefined;
  this.desiredVectorLength = this.desiredVector ? Math.round(this.desiredVector.length()) : 0;
  this.desiredAngle = this.desiredVector ? Math.floor(this.desiredVector.angleDeg()) : undefined;

  this.podFaceAngle = normalizeAngle(this.desiredAngle - this.nextCPAngle);
}

Pod.prototype.updateVelocity = function(pos, thrust) {
  if (Number.isInteger(thrust)) {
    let norm = pos.clone().normalize().setLength(thrust); 
    let vel = this.velocity.clone().add(norm);
    this.velocity = vel.setLength(vel.length() * 0.85).unfloat();
  }
}

Pod.prototype.clone = function () {
  return new Pod(this.position.clone(), this.lifespan, this.hasBoost, this.nextCPPos.clone(), this.nextCPDist, this.nextCPAngle, this.velocity.clone());
};

Pod.prototype.move = function() {
  let thrust = Math.max(Math.round(((360 - Math.abs(this.nextCPAngle)) / 360) * 100), 0);
  print(`${this.nextCPPos.x} ${this.nextCPPos.y} ${thrust}`);
  this.updateVelocity(this.nextCPPos, thrust);
}

export function createPod(inputs, isItMine, lifespan, hasBoost, velocity) {
  if (isItMine) {
    return new Pod(new Victor(+inputs[0], +inputs[1]), lifespan, hasBoost, new Victor(+inputs[2], +inputs[3]), +inputs[4], +inputs[5], velocity);
  } else {
    return new Pod(new Victor(+inputs[0], +inputs[1]));
  }
}