import { assert } from 'chai';
import { ExampleInstance } from '../../types/truffle-contracts';
import { Example } from '../artifacts';
import { configure } from '../configure';

describe('Example', function() {
    let example: ExampleInstance;

    before(async () => {
        await configure();
    });

    beforeEach(async () => {
        example = await Example.new();
    });

    it('sum()', async () => {
        assert.equal((await example.sum(1, 2)).toNumber(), 3, '1+2=3');
    });
});
