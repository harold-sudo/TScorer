import TScorer from "./tscorer.js";

describe("Tennis Scorer:", () => {
  it("deberia mostrar el marcador en Love - Love", () => {
    const scorer = new TScorer();
    expect(scorer.showScore()).toEqual("Love - Love");
    //expect(tscorer(0, 0)).toEqual("Love - Love");
  });

  it("jugador 1 anota, deberia mostrar el marcador en 15 - Love", () => {
    const scorer = new TScorer();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("15 - Love");
    //expect(tscorer(1, 0)).toEqual("15 - Love");
  });

  it("jugador 2 anota, genera empate, deberia mostrar el marcador en 15 - 15", () => {
    const scorer = new TScorer();
    scorer.player1Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("15 - 15");
    //expect(tscorer(1, 1)).toEqual("15 - 15");
  });

  it("jugador 1 anota, deberia mostrar el marcador en 30 - 15", () => {
    const scorer = new TScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("30 - 15");
    //expect(tscorer(2, 1)).toEqual("30 - 15");
  });

  it("jugador 2 anota, genera empate, deberia mostrar el marcador en 30 - 30", () => {
    const scorer = new TScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("30 - 30");
    //expect(tscorer(2, 2)).toEqual("30 - 30");
  });

  it("jugador 1 anota, deberia mostrar el marcador en 40 - 30", () => {
    const scorer = new TScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("40 - 30");
    //expect(tscorer(3, 2)).toEqual("40 - 30");
  });
  
  it("jugador 2 anota, genera empate, deberia mostrar el marcador en Deuce", () => {
    const scorer = new TScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Deuce");
    //expect(tscorer(3, 3)).toEqual("Deuce");
  });

  it("jugador 1 anota, deberia mostrar el marcador en Advantage Player 1", () => {
    const scorer = new TScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Advantage Player 1");
  });
});