class TScorer {
    constructor() {
        this.player1Points = 0;
        this.player2Points = 0;
    }
    showScore() {
        const scoreNames = ["Love", "15", "30", "40"];
        if (this.player1Points >= 3 && this.player2Points >= 3) 
        {
            if (this.player1Points === this.player2Points) {
                return "Deuce";
            }
            if (this.player1Points === this.player2Points + 1) {
                return "Advantage Player 1";
            }
            if (this.player1Points === this.player2Points + 2) {
                return "Game Player 1";
            }
        }
        return `${scoreNames[this.player1Points]} - ${scoreNames[this.player2Points]}`;
    }
    player1Scores() {
        this.player1Points++;
    }
    player2Scores() {
        this.player2Points++;
    }
}

export default TScorer;

// function tscorer(fst, snd) {
//     if (fst === 1 && snd === 0) 
//     {
//         return "15 - Love";
//     }
//     else if (fst === 1 && snd === 1)
//     {
//         return "15 - 15";
//     }
//     else if (fst === 2 && snd === 1)
//     {
//         return "30 - 15";
//     }
//     else if (fst === 2 && snd === 2)
//     {
//         return "30 - 30";
//     }
//     return "Love - Love";
// }
// export default tscorer;