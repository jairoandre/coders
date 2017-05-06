import Victor from 'victor';

export default function Vector() {
  Victor.apply(this, attributes);
}

Vector.prototype.setLength = function (scalar) {
    var length = this.length();
    if (scalar >= 0 && length !== 0) {
        var sinA = this.y / length;
        var sinB = this.x / length;
        this.y = sinA * scalar;
        this.x = sinB * scalar;
    }
    return this;
};
