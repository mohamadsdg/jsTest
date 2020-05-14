const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("return winner", () => {
  const originalWinner = utils.getWinner;

  utils.getWinner = (p1, p2) => p1;

  const winner = thumbWar("Kent C. Dodds", "KenWheeler");

  expect(winner).toBe("Kent C. Dodds");


  // clean-up
  utils.getWinner = originalWinner;
});
