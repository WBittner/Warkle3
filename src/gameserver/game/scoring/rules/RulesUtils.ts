/**
 *  Utility functions for scoring rules
 */
export class Utility {

    static generateHeightArray(diceValues: number[]) {
        let heightArray = [0,0,0,0,0,0,0];

        diceValues.forEach(function(value, index, array) {
            heightArray[value]++;
        });

        return heightArray;
    }
}