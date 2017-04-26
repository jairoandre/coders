/**
Expert Rules

On each turn the pods movements are computed this way:
Rotation: the pod rotates to face the target point, with a maximum of 18 degrees (except for the 1rst round).
Acceleration: the pod's facing vector is multiplied by the given thrust value. The result is added to the current speed vector.
Movement: The speed vector is added to the position of the pod. If a collision would occur at this point, the pods rebound off each other.
Friction: the current speed vector of each pod is multiplied by 0.85
The speed's values are truncated and the position's values are rounded to the nearest integer.
Collisions are elastic. The minimum impulse of a collision is 120.
A boost is in fact an acceleration of 650.
A shield multiplies the Pod mass by 10.
The provided angle is absolute. 0° means facing EAST while 90° means facing SOUTH.
**/

export default function State(myPods, enemyPods) {  
  this.myPods = myPods;
  this.enemyPods = enemyPods;
}