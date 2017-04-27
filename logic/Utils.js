import Victor from 'victor';

const Utils = {
  cartesianToPolar: function(cartesian) {
    return new Victor(cartesian.length(), cartesian.angle());
  },
  polarToCartesian: function(polar) {
    return new Victor(Math.round(polar.x * Math.cos(polar.y)), Math.round(polar.x * Math.sin(polar.y)));
  },
  printObj: function(obj) {
    Object.keys(obj).forEach((key) => {
      printErr(`${key}: ${obj[key]}`);
    });
  }
}

export default Utils;