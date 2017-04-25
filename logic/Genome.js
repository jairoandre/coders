import Constants from './Constants';

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
  let x, y, thrust, angle = this.nextCheckPointAngle;
  if (this.first > 0.95 && this.pod.boostsLeft >= 1) {
    thrust = 'BOOST';    
  } else if (this.third < 0.25) {
    thrust = 0;
  } else if (this.third > 0.75) {
    thrust = 200;
  } else {
    thrust = Math.floor(200 * (this.third - 0.25) * 2)
  }
  if (this.second < 0.25) {
    angle += 18;
  } else if (this.second > 0.75) {
    angle -= 18;
  } else {
    angle += Math.floor(-18 + 36 * (this.second - 0.25) * 2);
  }
}


