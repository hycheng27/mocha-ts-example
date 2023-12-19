import { assert } from 'chai';
import { addition } from '../src/calculator';

describe('Calculator Tests', () => {
    it('should return 5 when 2 is added to 3', () => {
        const result = addition(2, 3);
        assert.equal(result, 5);
    });

    it('should return 10 when 5 is added to 5', () => {
        const result = addition(5, 5);
        assert.equal(result, 10);
    });
});
