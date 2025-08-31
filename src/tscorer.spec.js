import tscorer from "./tscorer.js";

describe("Tennis Scorer:", () => {
  it("deberia mostrar el marcador en Love - Love", () => {
    expect(tscorer()).toEqual("Love - Love");
  });

  it("jugador 1 anota, deberia mostrar el marcador en 15 - Love", () => {
    expect(tscorer(1)).toEqual("15 - Love");
  });

  it("jugador 2 anota, genera empate, deberia mostrar el marcador en 15 - 15", () => {
    expect(tscorer(1)).toEqual("15 - 15");
  });
});