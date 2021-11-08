import React from 'react';
import renderer from 'react-test-renderer';
import MyAccount from '../../pages/myaccount'

describe('<MyAccount />', () => {
    it('Sample MyAccount', () => {
        const tree = renderer.create(<MyAccount />).toJSON();
        expect(tree).toMatchSnapshot();
        //expect(tree.children[0].children[0].type).toBe('View');
        //expect(tree.children[0].children[1].type).toBe('View');
        //console.log(tree)

    });
});