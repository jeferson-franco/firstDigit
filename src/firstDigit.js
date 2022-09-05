// For inputString = "var_1__Int", the output should be
// solution(inputString) = '1';
// For inputString = "q2q-q", the output should be
// solution(inputString) = '2';
// For inputString = "0ss", the output should be
// solution(inputString) = '0'.

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