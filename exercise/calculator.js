// Session 1 independent exercise starter.
// Rename this file to calculator.ts, then follow the README.

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}

// Try it: compile with `npx tsc`, then run `node calculator.js`.
// One of these calls is deliberately wrong. JavaScript shrugs and carries on;
// once you add types, the compiler will point straight at it.
console.log('2 + 3 =', add(2, 3));
console.log('10 - 4 =', subtract(10, 4));
console.log('6 * 7 =', multiply(6, 7));
console.log('10 / 2 =', divide('10', 2));
