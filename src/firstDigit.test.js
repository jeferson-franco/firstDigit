const solution = require('./firstDigit.js');

test('test 1', () => {
    expect(solution("var_1__Int")).toBe("1");
});

test('test 2', () => {
    expect(solution("q2q-q")).toBe("2");
});

test('test 3', () => {
    expect(solution("0ss")).toBe("0");
});

test('test 4', () => {
    expect(solution("_Aas_23")).toBe("2");
});

test('test 5', () => {
    expect(solution("a a_933")).toBe("9");
});

test('test 6', () => {
    expect(solution("ok0")).toBe("0");
});
