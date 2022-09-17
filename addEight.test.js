const { default: TestRunner } = require("jest-runner");
const addEight = require('./addEight');

test('returns the number plus eight', () => {
    expect(addEight(10)).toBe(18);
})

// npm --version
// npm init -y
// npm install --save-dev jest
// amend package.json file content key:value pair to "test": "jest"
// npm run test
