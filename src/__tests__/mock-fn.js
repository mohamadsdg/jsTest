const thumbWar = require("../thumb-war");
const utils = require("../utils");

describe("mock-fn scope", () => {
  test("My Test", () => {
    const fn = jest.fn();

    // fn.mockReturnValueOnce(50);
    fn.mockReturnValue("defualt value ");

    fn();
    // console.log(fn(), fn.mock.calls);

    expect(fn).toHaveBeenCalled();
    // expect(fn).toHaveBeenCalledTimes(2);
  });

  test("return winner", () => {
    const originalWinner = utils.getWinner;
    utils.getWinner = jest.fn((p1, p2) => p1);

    const winner = thumbWar("Kent C. Dodds", "KenWheeler");
    expect(winner).toBe("Kent C. Dodds");

    // used mock function
    // utils.getWinner.mockName("Mamrez mock");
    // console.log(utils.getWinner.mock.calls);
    // console.log(utils.getWinner.getMockName());

    expect(utils.getWinner).toHaveBeenCalled();
    expect(utils.getWinner).toHaveBeenCalledTimes(2);
    expect(utils.getWinner).toHaveBeenCalledWith("Kent C. Dodds", "KenWheeler");
    expect(utils.getWinner).toHaveBeenNthCalledWith(
      1,
      "Kent C. Dodds",
      "KenWheeler"
    );
    expect(utils.getWinner).toHaveBeenNthCalledWith(
      2,
      "Kent C. Dodds",
      "KenWheeler"
    );

    expect(utils.getWinner.mock.calls).toEqual([
      ["Kent C. Dodds", "KenWheeler"],
      ["Kent C. Dodds", "KenWheeler"],
    ]);

    // clean-up
    utils.getWinner = originalWinner;
  });
});
