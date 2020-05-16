const thumbWar = require("../thumb-war");
const utils = require("../utils");

jest.mock("../utils.js");

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
