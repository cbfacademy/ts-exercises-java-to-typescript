// Session 1 reference solution: From Java to TypeScript.

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    return a / b;
}

// The starter called divide('10', 2); with types in place the compiler rejects
// the string argument, so it is corrected to a number here.
console.log('2 + 3 =', add(2, 3));
console.log('10 - 4 =', subtract(10, 4));
console.log('6 * 7 =', multiply(6, 7));
console.log('10 / 2 =', divide(10, 2));
