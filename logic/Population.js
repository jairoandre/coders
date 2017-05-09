import Constants from './Constants';
import Genome from './Genome';

export default class Population {
  constructor(state) {
    this.items = [];
    for (let i = 0; i < Constants.POPULATION_SIZE; i++) {
      this.items.push(new Genome(state.myPods));
    } 
  }
}