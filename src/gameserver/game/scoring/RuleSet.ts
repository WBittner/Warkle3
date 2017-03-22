import {Rule, RuleOptions} from "./Rule";

/**
 *  Class to represent a set of rules
 */
export class RuleSet {
    rules;

    constructor() {
        this.rules = {}
    }

    addRule(rule: Rule, options: RuleOptions): void {
        this.rules[rule.name] = rule.getScore.bind(rule, options);
    }

    getScore(diceValues: number[]): number {
        var maxScore = 0;
        for(let rule in this.rules) {
            maxScore = Math.max(maxScore, this.rules[rule](diceValues));
        }

        return maxScore;
    }
}