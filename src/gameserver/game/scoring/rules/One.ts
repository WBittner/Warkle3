import {Rule, RuleOptions} from "../Rule";
import {Die} from "../../pieces/Die";

/**
 * Rule for rolling a 1
 */
export class One extends Rule {

    static NAME = "One";

    constructor() {
        super(One.NAME);
    }

    getDefaultOptions() {
        return {
            value: 100
        };
    }

    calculateScore(options: OneOptions, dice: number[]) {
        return dice.length === 1 && dice[0] === Die.ONE ? options.value : 0;
    }

}

export interface OneOptions extends RuleOptions {
    value: number
}