/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
import {createPod} from './model/Pod';
import Utils from './logic/Utils';

let turn = 0;

// game loop
while (true) {
    var inputs = readline().split(' ');
    let myPod = createPod(inputs, true, 100, true);
    var inputs = readline().split(' ');
    let enemyPod = createPod(inputs);
    Utils.printObj(myPod);
    myPod.move();
}