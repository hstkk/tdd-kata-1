const DEFAULT_SEPARATOR: RegExp = /,|\n/;

export function add(str: string): number {
    const matches = str.match(/\/\/([^']+)\n([^']+)/);
    const separator = matches && matches[1] || DEFAULT_SEPARATOR;
    const numbers = matches && matches[2] || str;

    return numbers
        .split(separator)
        .map(numberify)
        .reduce(sum);
}

function numberify(str: string): number {
    return +str;
}

function sum(a: number, b: number): number {
    return a + b;
}
