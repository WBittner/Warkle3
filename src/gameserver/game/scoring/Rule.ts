/**
 *  Base class for all rules that can be added to the game.
 *  Rules will take in an options object and an array of numbers and determine the score of those exact values.
 *
 *  NOTE: Rules shall NOT consider subsets in the score. E.g. a rule to score 3 of a kind shall find [6,6,6,6]
 *  to be worth 0 points.
 */
export abstract class Rule {
    constructor(public name: string) {}

    /**
     * Scores a set of dice, with the given options object
     * @param options RuleOptions
     * @param diceValues number[]
     * @returns {number}
     */
    abstract calculateScore(options: RuleOptions, diceValues: number[]): number;

    /**
     * Returns the default options for the rule
     * @returns {RuleOptions}
     */
    abstract getDefaultOptions(): RuleOptions;

    /**
     * Fills in any holes of the given options with the defaults, then returns the score from calculateScore
     * @param givenOptions
     * @param dice
     * @returns {number}
     */
    getScore(givenOptions: RuleOptions, dice: number[]): number {
        let defaultOptions = this.getDefaultOptions();
        givenOptions = givenOptions || defaultOptions;

        let options = {};

        for(let option in defaultOptions) {
            options[option] = givenOptions[option] || defaultOptions[option];
        }

        return this.calculateScore(options, dice);
    }
}

/**
 * Just a POJO that will hold any options needed for the rule
 */
export interface RuleOptions {}