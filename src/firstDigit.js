function solution(inputString) {
    let firstDigit = inputString.match(/\d/);
    return firstDigit ? firstDigit[0] : '0';
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test firstDigit

// alternative solution