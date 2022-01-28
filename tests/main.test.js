const add = require('../main');

test('add(1,1) = 2', () => {
    expect(add(1,1)).toBe(2);
})

test('add(1,3) = 4', () => {
    expect(add(1,3)).toBe(0);
})