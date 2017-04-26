import Victor from 'victor';

export default Utils = {
  cartesianToPolar: function(cartesian) {
    return new Victor(cartesian.length(), cartesian.angle());
  },
  polarToCartesian: function(polar) {
    return new Victor(Math.round(polar.x * Math.cos(polar.y)), Math.round(polar.x * Math.sin(polar.y)));
  }
}