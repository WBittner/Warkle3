import {Rule, RuleOptions} from "../Rule";
import {Utility} from "./RulesUtils";

/**
 * Rule to score a straight
 */
export class Straight extends Rule {

    static NAME = "Straight";

    constructor() {
        super(Straight.NAME);
    }

    getDefaultOptions() {
        return {
            length: 6,
            value: 3000
        };
    }

    calculateScore(options: StraightOptions, diceValues: number[]) {
        if(diceValues.length !== options.length) {
            return 0;
        }

        let longestStreak = 0;
        let currentStreak = 0;
        Utility.generateHeightArray(diceValues).forEach(function(numDice, index, array) {
            if(numDice > 0) {
                longestStreak = Math.max(longestStreak, ++currentStreak);
            } else {
                currentStreak = 0;
            }
        });

        return longestStreak >= options.length? options.value : 0;
    }
}

export interface StraightOptions extends RuleOptions {
    length: number,
    value: number
}