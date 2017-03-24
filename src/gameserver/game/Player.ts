import {Die} from "./pieces/Die";
import {PLAYER_ACTIONS} from "../actions/PlayerActions";

/**
 * Represents a player of the game
 */
export class Player {
    score: number;
    hand: Die[];
    roundScore: number;
    lastAction: PLAYER_ACTIONS;

    constructor(public id: string) {
        this.score = 0;
        this.roundScore = 0;
        this.hand = [Die.getRandomDie(), Die.getRandomDie(), Die.getRandomDie(),
                        Die.getRandomDie(), Die.getRandomDie(), Die.getRandomDie()];
        this.lastAction = PLAYER_ACTIONS.ROLL_DICE;
    }

    keepDice(diceValues: number[], score: number) {
        diceValues.forEach(function(diceValue, index, array) {
           if(!this.hand.some(this.keepDieIfAble.bind(null, diceValue))) {
               throw new RangeError("Player attempted to keep invalid list of dice values: " + diceValue + " in " + diceValues);
           }
        }, this);

        this.roundScore += score;
        this.lastAction = PLAYER_ACTIONS.KEEP_DICE;
    }

    private keepDieIfAble(value, die:Die) {
        if(!die.kept && die.value === value) {
            die.keep();
            return true;
        }
        return false;
    }

    rollDice() {
        if(this.lastAction !== PLAYER_ACTIONS.KEEP_DICE) {
            throw new Error("Attempted to roll dice without having first kept any dice");
        }

        let coldDice: Die[] = this.hand.filter(function(die) {
           return !die.kept;
        });

        let diceToReroll: Die[] = coldDice.length === 0? this.hand : coldDice;

        diceToReroll.forEach(function(die, index, array) {
           die.reroll();
        });

        this.lastAction = PLAYER_ACTIONS.ROLL_DICE;
    }

    startTurn() {
        this.roundScore = 0;
        this.hand.forEach(function(die, index, array) {
           die.reroll();
        });
        this.lastAction = PLAYER_ACTIONS.ROLL_DICE;
    }

    endTurn(): number {
        if(this.lastAction === PLAYER_ACTIONS.ROLL_DICE) {
            throw new Error("Attempted to end turn after rolling, but before keeping any dice.");
        }

        this.score += this.roundScore;
        this.lastAction = PLAYER_ACTIONS.END_TURN;
        return this.score;
    }
}