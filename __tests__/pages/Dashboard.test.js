import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../../pages/dashboard'

describe('<Dashboard />', () => {
    it('Sample Dashboard', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
        //expect(tree.children[0].children[0].type).toBe('View');
        //expect(tree.children[0].children[1].type).toBe('View');
        //console.log(tree)

    });
});