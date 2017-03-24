import {getRuleSet} from "./game/scoring/RuleSetFactory";
import {Player} from "./game/Player";
import {Game} from "./game/Game";
import {PLAYER_ACTIONS} from "./actions/PlayerActions";
/**
 * Entry point of GameServer.
 * NOTE: For now, this is just for testing our progress..
 */

let ruleSet = getRuleSet(["One","Five","ThreeOfAKind","FourOfAKind","Straight","ThreePair"],[]);



let done = false;
let errorCount = 0;
while(!done) {
    let p1 = new Player("Will");
    let p2 = new Player("Devon");
    var game = new Game([p1, p2],ruleSet);
    try {
        game.handlePlayerAction(PLAYER_ACTIONS.KEEP_DICE, {diceValues: [4,4,5,5,6,6], playerId: "Will"});
        console.log(game.getCurrentPlayer().hand);
        done = true;
    } catch(error) {
        console.log(error.toString());
        console.log("Failed : " + ++errorCount);
    }
}
console.log(game);