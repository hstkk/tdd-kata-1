import { Error } from 'tslint/lib/error';
export function add(str: string): number {
    const numbers: ReadonlyArray<number> = split(str).map(numberify);
    const negatives: ReadonlyArray<number> = numbers.filter(i => i < 0);

    if (negatives.length > 0) {
        throw new RangeError(`negatives not allowed ${negatives.join(', ')}`);
    }

    return numbers.reduce(sum);
}

function numberify(str: string): number {
    return +str;
}

function split(str: string): ReadonlyArray<string> {
    const [numbers, separator] = (
        str.match(/\/\/([^']+)\n([^']+)/) || [/,|\n/, str]
    ).reverse();

    return numbers.split(separator);
}

function sum(a: number, b: number): number {
    return a + b;
}
