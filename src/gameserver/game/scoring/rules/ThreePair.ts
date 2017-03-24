import {Rule, RuleOptions} from "../Rule";
import {Utility} from "./RulesUtils";

/**
 *  Rule to score three pairs of dice of the same kind.
 *  Note 4 of a kind + a pair is still a three pair
 */
export class ThreePair extends Rule {

    static NAME = "ThreePair";

    constructor() {
        super(ThreePair.NAME);
    }

    getDefaultOptions(): ThreePairOptions {
        return {
            value: 1500
        };
    }

    calculateScore(options: ThreePairOptions, diceValues: number[]): number {
        if(diceValues.length !== 6) {
            return 0;
        }

        return (Utility.generateHeightArray(diceValues).every(function(numDice, index, array) {
           return (numDice % 2) === 0;
        })? options.value : 0);
    }
}

/**
 * Options for scoring a three of a kind
 */
export interface ThreePairOptions extends RuleOptions {
    value: number
}