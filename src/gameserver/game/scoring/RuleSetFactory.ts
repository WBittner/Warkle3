import {RuleOptions, Rule} from "./Rule";
import {ThreeOfAKind} from "./rules/ThreeOfAKind";
import {RuleSet} from "./RuleSet";
import {FourOfAKind} from "./rules/FourOfAKind";
import {One} from "./rules/One";
import {Five} from "./rules/Five";
import {Straight} from "./rules/Straight";
import {ThreePair} from "./rules/ThreePair";

/**
 *  Factory that will return rule sets for which to score games
 *  Input: array of rule name strings, parallel array of options
 *  Note: This file is nothing short of TypeScript magic
 */
export function getRuleSet(ruleNames: string[], ruleOptions: RuleOptions[]): RuleSet {
    let ruleSet = new RuleSet();

    ruleNames.forEach(function(ruleName, index, array) {
        if(RULE_LIST[ruleName]) {
            ruleSet.addRule(new RULE_LIST[ruleName](), ruleOptions[index]);
        }
    });

    return ruleSet;
}

const RULE_LIST: { [key:string]: new() => Rule } = {
    [ThreeOfAKind.NAME]: ThreeOfAKind,
    [FourOfAKind.NAME]: FourOfAKind,
    [One.NAME]: One,
    [Five.NAME]: Five,
    [Straight.NAME]: Straight,
    [ThreePair.NAME]: ThreePair
};
