const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

// monkey patching
const originalWinner = utils.getWinner;

// we've made our test deterministic (monkey patching)
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Kent C. Dodds", "KenWheeler");

assert.strictEqual(winner, "Kent C. Dodds");

/**
 * Tip : Then we're cleaning up after ourselves to make sure that other
 *      tests that may want to use this module can use it in its
 *      unmodified state
 */
// clean-up monkey patching
utils.getWinner = originalWinner;
