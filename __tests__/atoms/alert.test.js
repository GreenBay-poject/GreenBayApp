import React from 'react';
import renderer from 'react-test-renderer';

import ShowAlert from '../../Alert/alert'; '../../Alert/alert'

describe('Alert', () => {
    it('Sample Alert', () => {
        res = ShowAlert("Sample Title", "MESSAGE")
        expect(res).toBe(undefined);
    });
});