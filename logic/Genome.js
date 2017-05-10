import Constants from './Constants';
import Gene from '../model/Gene';

export default class Genome {
  constructor(pods) {
    this.genes = [];
    pods.forEach((pod) => {
      for (let i = 0; i < Constants.GENERATIONS; i++) {
        this.genes.push(new Gene(pod));
      }
    });  
  }
  
}

