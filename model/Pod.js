import Vector from './Vector';
import Utils from '../logic/Utils';

function normalizeAngle(angle) {
  return angle < 0 ? (360 + angle) : angle;
}

export default class Pod {

  constructor(position, lifespan, hasBoost, nextCPPos, nextCPDist, nextCPAngle, velocity) {
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

  updateVelocity(pos, thrust) {
    if (Number.isInteger(thrust)) {
      let norm = pos.clone().normalize(); 
      norm.setMag(thrust);
      let vel = this.velocity.clone().add(norm);
      vel.setMag(vel.length() * 0.85);
      this.velocity = vel.unfloat();
    }
  }

  clone() {
    return new Pod(this.position.clone(), this.lifespan, this.hasBoost, this.nextCPPos.clone(), this.nextCPDist, this.nextCPAngle, this.velocity.clone());
  }

  move() {
    let thrust = Math.max(Math.round(((360 - Math.abs(this.nextCPAngle)) / 360) * 100), 0);
    print(`${this.nextCPPos.x} ${this.nextCPPos.y} ${thrust}`);
    this.updateVelocity(this.nextCPPos, thrust);
  }

}

export function createPod(inputs, isItMine, lifespan, hasBoost, velocity) {
  if (isItMine) {
    return new Pod(new Vector(+inputs[0], +inputs[1]), lifespan, hasBoost, new Vector(+inputs[2], +inputs[3]), +inputs[4], +inputs[5], velocity);
  } else {
    return new Pod(new Vector(+inputs[0], +inputs[1]));
  }
}
