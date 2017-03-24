/**
 *  Represents one rolled die
 */
export class Die {
    static ONE = 1;
    static TWO = 2;
    static THREE = 3;
    static FOUR = 4;
    static FIVE = 5;
    static SIX = 6;

    static getRandomDie(): Die {
        return new Die(Math.floor(Math.random() * 6) + 1);
    }

    kept: boolean;

    constructor(public value: number) {
        this.kept = false;
    }

    reroll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.kept = false;
    }

    keep() {
        this.kept = true;
    }
}