/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
import {createPod} from './model/Pod';

// game loop
while (true) {
    var inputs = readline().split(' ');
    let myPod = createPod(inputs);
    var inputs = readline().split(' ');
    let enemyPod = createPod(inputs);
    print(myPod.position.x + ' ' + myPod.position.y + ' 80');
}