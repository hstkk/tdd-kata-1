const SEPARATOR = ',';

export function add(str: string): number {
    return str
        .split(SEPARATOR)
        .map(s => +s)
        .reduce((sum, int) => sum + int);
}
