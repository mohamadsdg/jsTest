const thumbWar = require("../thumb-war");
const utils = require("../utils");

describe("spy scope", () => {
  //   test("My Test", () => {
  //     const fn = jest.fn();

  //     // fn.mockReturnValueOnce(50);
  //     fn.mockReturnValue("defualt value ");

  //     console.log(fn(), fn.mock.calls);

  //     expect(fn).toHaveBeenCalled();
  //   });

  test("return winner whit spy", () => {
    const spy = jest.spyOn(utils, "getWinner");
    spy.mockImplementation((p1, p2) => p1);

    const winner = thumbWar("Kent C. Dodds", "KenWheeler");
    expect(winner).toBe("Kent C. Dodds");

    // used mock function
    // utils.getWinner.mockName("Mamrez mock");
    // console.log(utils.getWinner.mock.calls);
    // console.log(utils.getWinner.getMockName());

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith("Kent C. Dodds", "KenWheeler");
    expect(spy).toHaveBeenNthCalledWith(1, "Kent C. Dodds", "KenWheeler");
    expect(spy).toHaveBeenNthCalledWith(2, "Kent C. Dodds", "KenWheeler");

    expect(spy.mock.calls).toEqual([
      ["Kent C. Dodds", "KenWheeler"],
      ["Kent C. Dodds", "KenWheeler"],
    ]);

    // clean-up
    spy.mockRestore();
  });
});
