export function add(str: string): number {
    return split(str)
        .map(numberify)
        .reduce(sum);
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
