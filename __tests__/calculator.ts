import { add } from 'calculator';

describe('Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    it('should return 1 for "1"', () => {
        expect(add('1')).toBe(1);
    });

    it('should return 3 for "1,2"', () => {
        expect(add('1,2')).toBe(3);
    });

    it('should handle unknown amount of numbers', () => {
        expect(add('1,2,3,4,5')).toBe(15);
    });

    it('should return 6 for “1\\n2,3”', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    it('should return 1 for "1,\\n"', () => {
        expect(add('1,\n')).toBe(1);
    });

    it('should return 3 for "//;\\n1;2"', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

    it('should throw exception "negatives not allowed -1"', () => {
        expect(() => add('-1')).toThrowError(/negatives not allowed -1/);
    });

    it('should throw exception "negatives not allowed -1, -2"', () => {
        expect(() => add('-1,-2')).toThrowError(/negatives not allowed -1, -2/);
    });

    it('should ignore big numbers, so 2 + 1001 = 2', () => {
        expect(add('2,1001')).toBe(2);
    });

    it('should support varying length delimiters', () => {
        expect(add('//[***]\n1***2***3')).toBe(6);
    });
});
