export function add(str: string): number {
    return sum(
        validate(
            numberify(
                split(str)
            )
        )
    );
}

function numberify(strings: ReadonlyArray<string>): ReadonlyArray<number> {
    return strings.map(str => +str);
}

function split(str: string): ReadonlyArray<string> {
    const [numbers, separator] = (
        str.match(/\/\/([^']+)\n([^']+)/) || [/,|\n/, str]
    ).reverse();

    return numbers.split(separator);
}

function sum(numbers: ReadonlyArray<number>): number {
    return numbers.reduce((a, b) => a + b);
}

function validate(numbers: ReadonlyArray<number>): ReadonlyArray<number> {
    const negatives: ReadonlyArray<number> = numbers.filter(i => i < 0);

    if (negatives.length > 0) {
        throw new RangeError(`negatives not allowed ${negatives.join(', ')}`);
    }

    return numbers.filter(i => i < 1000);
}
