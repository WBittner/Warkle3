import {ThreeOfAKind} from "./game/scoring/rules/ThreeOfAKind";
import {getRuleSet} from "./game/scoring/RuleSetFactory";
/**
 * Entry point of GameServer.
 * Receives connections and then delegates to either the Server code or the Game code for processing.
 * NOTE: For now, this is just for testing our progress..
 */


let ruleSet = getRuleSet(["ThreeOfAKind","FourOfAKind"],[{onesMultiplier: 10, generalMultiplier:100}, {}]);

console.log(ruleSet.getScore([2,2,2,2]));