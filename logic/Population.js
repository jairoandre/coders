import Constants from './Constants';
import Genome from './Genome';

export default function Population(state) {
  this.items = [];
  for (let i = 0; i < Constants.POPULATION_SIZE; i++) {
    this.items.push(new Genome(state.myPods));
  }
}