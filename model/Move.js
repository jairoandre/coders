export default function Move(x,y, thrust) {
  this.x = x;
  this.y = y;
  this.thrust = thrust;
}

Move.prototype.print = function() {
  return `${this.x} ${this.y} ${this.thrust}`;
}
