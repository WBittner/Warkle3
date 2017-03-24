import {ThreeOfAKind} from "./game/scoring/rules/ThreeOfAKind";
import {getRuleSet} from "./game/scoring/RuleSetFactory";
/**
 * Entry point of GameServer.
 * Receives connections and then delegates to either the Server code or the Game code for processing.
 * NOTE: For now, this is just for testing our progress..
 */


let ruleSet = getRuleSet(["ThreePair"],[{value: 1000, length:1}, {value:222}]);

console.log(ruleSet.getScore([4,4,6,6,6,6]));