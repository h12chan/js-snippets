const { default: TestRunner } = require("jest-runner");
const addEight = require('./addEight');

test('returns the number plus eight', () => {
    expect(addEight(10)).toBe(18);
})
