import { describe, expect, it } from 'vitest';

// Autograding for Session 1: From Java to TypeScript.
// The student renames exercise/calculator.js to calculator.ts and adds types.
// The four arithmetic functions are already runtime-correct in the starter;
// the deliberate mistake is in a demo *call* (divide('10', 2)), which the type
// checker catches, not these tests. These tests confirm the functions still
// behave once the student has been through them.
import { add, divide, multiply, subtract } from '../exercise/calculator';

describe('session 1: calculator', () => {
    it('add returns the sum', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-4, 4)).toBe(0);
    });

    it('subtract returns the difference', () => {
        expect(subtract(10, 4)).toBe(6);
    });

    it('multiply returns the product', () => {
        expect(multiply(6, 7)).toBe(42);
    });

    it('divide returns the quotient', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(9, 3)).toBe(3);
    });
});
