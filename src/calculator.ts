export function add(str: string): number {
    const numbers: ReadonlyArray<number> = split(str)
        .map(numberify)
        .filter(max(1000));

    // tslint:disable-next-line:no-expression-statement
    validate(numbers);

    return numbers.reduce(sum);
}

function max(value: number): (x: number) => boolean {
    return x => x <= value;
}

function numberify(str: string): number {
    return +str;
}

function split(str: string): ReadonlyArray<string> {
    const regex = /\/\/\[?(.*?)\]?\n/;
    const [numbers = str, separator = /,|\n/] = str.split(regex).reverse();

    return numbers.split(separator);
}

function sum(a: number, b: number): number {
    return a + b;
}

function validate(numbers: ReadonlyArray<number>): void {
    const negatives: ReadonlyArray<number> = numbers.filter(max(-1));

    if (negatives.length > 0) {
        throw new RangeError(`negatives not allowed ${negatives.join(', ')}`);
    }
}
