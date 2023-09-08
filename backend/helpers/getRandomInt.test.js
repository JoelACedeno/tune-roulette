const { getRandomInt } = require('./getRandomInt');

describe('getRandomInt function', () => {
    it('should return a random integer within the specified range', () => {
        const min = 1;
        const max = 10;
        const randomInt = getRandomInt(min, max);

        expect(randomInt).toBeGreaterThanOrEqual(min);
        expect(randomInt).toBeLessThanOrEqual(max);
    });

    it('should handle a large range', () => {
        const min = 1;
        const max = 1000000;
        const randomInt = getRandomInt(min, max);

        expect(randomInt).toBeGreaterThanOrEqual(min);
        expect(randomInt).toBeLessThanOrEqual(max);
    });
});
