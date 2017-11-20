import { add } from 'calculator';

describe('Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    it('should return 1 for "1"', () => {
        expect(add('1')).toBe(1);
    });
});
