import {Rule, RuleOptions} from "../Rule";
import {Die} from "../../pieces/Die";

/**
 * Rule for rolling a 5
 */
export class Five extends Rule {

    static NAME = "Five";

    constructor() {
        super(Five.NAME);
    }

    getDefaultOptions() {
        return {
            value: 50
        };
    }

    calculateScore(options: FiveOptions, dice: number[]) {
        return dice.length === 1 && dice[0] === Die.FIVE ? options.value : 0;
    }

}

export interface FiveOptions extends RuleOptions {
    value: number
}