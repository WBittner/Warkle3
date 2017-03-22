import {Rule, RuleOptions} from "../Rule";

/**
 *  Rule to score four dice of the same kind.
 */
export class FourOfAKind extends Rule {

    static NAME = "FourOfAKind";

    constructor() {
        super(FourOfAKind.NAME);
    }

    getDefaultOptions(): FourOfAKindOptions {
        return {
            value: 1000
        };
    }

    calculateScore(options: FourOfAKindOptions, diceValues: number[]): number {
        if(diceValues.length === 4 && diceValues[0] === diceValues[1] && diceValues[1] === diceValues[2] &&
            diceValues[2] === diceValues[3] ) {
            return options.value;
        }

        return 0;
    }
}

/**
 * Options for scoring a four of a kind
 */
export interface FourOfAKindOptions extends RuleOptions {
    value: number
}