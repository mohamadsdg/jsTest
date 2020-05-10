const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const winner = thumbWar("Kent C. Dodds", "KenWheeler");

assert.strictEqual(winner, "Kent C. Dodds");
