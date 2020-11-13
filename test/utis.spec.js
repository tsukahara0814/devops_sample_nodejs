const { math } = require('../src/utils');

describe('utils test', () => {
    describe('math test', () => {
        test('should be 3 when adding 1 and 2', () => {
            expect(math.add(1, 2)).toBe(3);
        });

        test('should be 3 when substracting 2 from 1', () => {
            expect(math.subtract(1, 2)).toBe(-1);
        });

        test('should be 12 when multiplying 3 by 4', () => {
            expect(math.multiply(3, 4)).toBe(12);
        });

        test('should be 4 when dividing 8 by 2', () => {
            expect(math.divide(8, 2)).toBe(4);
        });
    });
});