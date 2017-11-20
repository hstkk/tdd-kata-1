import { hello } from 'index';

describe('Yet another smoke test', () => {
    it('should work', () => {
        expect(hello()).toBe('World!');
    });
});
