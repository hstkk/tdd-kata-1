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
});
