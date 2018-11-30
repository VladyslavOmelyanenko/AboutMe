'use strict';

test('test_string', () => {
expect(("My name is Vlad").split(' ').reverse().join(' ')).toEqual("Vlad is name My");
});

test('test_numbers', () => {
expect(Number.isInteger((9.655).toFixed(2))).toEqual(false);
});

test('test_arrays', () => {
expect(Number(parseFloat([1, 23, -5, 47, 2, 8.5, -12].sort().reverse().join('')).toFixed(0))).toEqual(9);
});

var n = 3;

test('test_compare_operators', () => {
    expect(n++ * 8 - n > 28 ).toEqual(true);
    });