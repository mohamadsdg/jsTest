jest.mock("../utils.js", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  };
});

const thumbWar = require("../thumb-war");
const utils = require("../utils");

describe("mock-fn scope", () => {
  test("return winner", () => {
    const winner = thumbWar("Kent C. Dodds", "KenWheeler");

    expect(winner).toBe("Kent C. Dodds");
    expect(utils.getWinner.mock.calls).toEqual([
      ["Kent C. Dodds", "KenWheeler"],
      ["Kent C. Dodds", "KenWheeler"],
    ]);

    // clean-up
    utils.getWinner.mockReset();
  });
});
