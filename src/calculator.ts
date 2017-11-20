const SEPARATOR: RegExp = /,|\n/;

export function add(str: string): number {
    return str
        .split(SEPARATOR)
        .map(numberify)
        .reduce(sum);
}

function numberify(str: string): number {
    return +str;
}

function sum(a: number, b: number): number {
    return a + b;
}
