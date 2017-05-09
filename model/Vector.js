import Victor from 'victor';

export default class Vector extends Victor {
  constructor(x, y) {
    super(x, y);
  }
  clone() {
    return new Vector(this.x, this.y);
  }
  setMag(scalar) {
    var length = this.length();
    if (scalar >= 0 && length !== 0) {
        var sinA = this.y / length;
        var sinB = this.x / length;
        this.y = sinA * scalar;
        this.x = sinB * scalar;
    }
  }
}