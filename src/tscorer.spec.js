import tscorer from "./tscorer.js";

describe("Tennis Scorer:", () => {
  it("deberia mostrar el marcador en Love - Love", () => {
    expect(tscorer()).toEqual("Love - Love");
  });

  it("jugador 1 anota, deberia mostrar el marcador en 15 - Love", () => {
    expect(tscorer()).toEqual("15 - Love");
  });
});