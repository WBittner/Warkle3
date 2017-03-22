import {Rule, RuleOptions} from "../Rule";
import {Die} from "../../pieces/Die";

/**
 *  Rule to score three dice of the same kind.
 */
export class ThreeOfAKind extends Rule {

    static NAME = "ThreeOfAKind";

    constructor() {
        super(ThreeOfAKind.NAME);
    }

    getDefaultOptions(): ThreeOfAKindOptions {
        return {
            onesMultiplier: 10,
            generalMultiplier: 100
        };
    }

    calculateScore(options: ThreeOfAKindOptions, diceValues: number[]): number {
        if(diceValues.length === 3 && diceValues[0] === diceValues[1] && diceValues[1] === diceValues[2]) {
            return diceValues[0] * options.generalMultiplier * (diceValues[0] === Die.ONE ? options.onesMultiplier : 1);
        }

        return 0;
    }
}

/**
 * Options for scoring a three of a kind
 */
export interface ThreeOfAKindOptions extends RuleOptions {
    onesMultiplier: number;
    generalMultiplier: number;
}