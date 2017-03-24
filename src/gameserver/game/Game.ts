import {Player} from "./Player";
import {PLAYER_ACTIONS} from "../actions/PlayerActions";
import {PlayerActionsOptions} from "../actions/PlayerActionsOptions";
import {RuleSet} from "./scoring/RuleSet";

/**
 *  Represents the game - group of players, current turn holder, rules, etc
 */
export class Game {
    turnIndex: number;

    constructor(public players: Player[], public ruleSet: RuleSet) {
        this.turnIndex = 0;
    }

    handlePlayerAction(action: PLAYER_ACTIONS, options: PlayerActionsOptions) {
        if(this.getCurrentPlayer().id !== options.playerId) {
            throw new Error("A Player whose turn it is not cannot take action: " + options.playerId);
        }

        switch(action) {
            case PLAYER_ACTIONS.KEEP_DICE:
                if(options.diceValues) {
                    this.keepDice(options.diceValues);
                } else {
                    throw new TypeError("Player attempted to keep dice with invalid supplied options: " + JSON.stringify(options));
                }
                break;
            case PLAYER_ACTIONS.ROLL_DICE:
                this.rollDice();
                break;
            case PLAYER_ACTIONS.END_TURN:
                this.transitionTurn();
                break;
            default:
                throw new TypeError("Player attempted to perform unknown action: " + action);
        }
    }

    keepDice(diceValues: number[]) {
        let score: number = this.ruleSet.getScore(diceValues);

        if(score === 0) {
            throw new RangeError("Attempted to save dice that would not increase score: " + diceValues);
        }

        this.getCurrentPlayer().keepDice(diceValues, score);
    }

    rollDice() {
        this.getCurrentPlayer().rollDice();
    }

    transitionTurn() {
        this.getCurrentPlayer().endTurn();

        this.turnIndex = (this.turnIndex === this.players.length - 1)? 0 : ++this.turnIndex;

        this.getCurrentPlayer().startTurn();
    }

    getCurrentPlayer() {
        return this.players[this.turnIndex];
    }
}