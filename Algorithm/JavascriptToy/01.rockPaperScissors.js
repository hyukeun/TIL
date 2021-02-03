// Basic code

const rockPaperScissors = function () {
    const category = ["rock","paper","scissors"];
    let solution = [];

    for (let i = 0; i < category.length; i++) {
        for (let j = 0; j < category.length; j++) {
            for (let k = 0;  k < category.length; k++){
                let temp = [];
                temp.push(category[i], category[j], category[k]);
                solution.push(temp);
            }
        }
    }
    return solution;
}

// Advanced code
// understand?

const rockPaperScissors = function (rounds) {
    rounds = rounds || 3;
    let outcomes = [];
    
    let plays = ['rock', 'paper', 'scissors'];

    let combos = function(roundsToGo, playedSoFar){
        if ( roundsToGo === 0) {
            outcomes.push(playedSoFar);
            return;
        }

        for (let i = 0; i < plays.length; i++){
            let currentPlay = plays[i];
            combos(roundsToGo-1, playedSoFar.concat(currentPlay));
        }
    };
    combos(rounds, []);
    return outcomes;
};
