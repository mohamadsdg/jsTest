async function test(title, callback) {
    try {
      await callback();
      console.log(`✓ ${title}`);
    } catch (error) {
      console.error(`✕ ${title}`);
      console.error(error);
    }
  }
  function expect(actual) {
    return {
      //   add Test Assertions
      toBe(expected) {
        if (actual !== expected) {
          throw new Error(`${actual} is not equal to ${expected}`);
        }
      },
      toEqual(expected) {},
      toBeGraterThan(expected) {},
    };
  }
  global.test = test
  global.expect = expect
  /**
   * tip : Provide Testing Helper Functions as Globals in JavaScript
   * node --require ./setup-globals.js lessons/globals.js
   */