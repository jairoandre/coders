import Constants from './Constants';
import Vector from '../model/Vector';
import Move from '../model/Move';

export default function Genome(pods) {
  this.genes = [];
  pods.forEach((pod) => {
    for (let i = 0; i < Constants.GENERATIONS; i++) {
      this.genes.push(new Gene(pod));
    }
  });
}

function Gene(pod) {
  this.pod = pod;
  this.first = Math.random();
  this.second = Math.random();
  this.third = Math.random();
}

Gene.prototype.toMove = function() {
  let x, y, thrust;
  let angle = this.podFaceAngle;
  if (this.first > 0.95 && this.pod.boostsLeft >= 1) {
    thrust = 'BOOST';    
  } else if (this.third < 0.25) {
    thrust = 0;
  } else if (this.third > 0.75) {
    thrust = 100;
  } else {
    thrust = Math.floor(100 * (this.third - 0.25) * 2)
  }
  if (this.second < 0.25) {
    angle += 18;
  } else if (this.second > 0.75) {
    angle -= 18;
  } else {
    angle += Math.floor(-18 + 36 * (this.second - 0.25) * 2);
  }
  let target = new Vector(7000, angle).unfloat();
  return new Move(target.x, target.y, thrust);
}


