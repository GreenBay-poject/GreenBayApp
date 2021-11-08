import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../../../components/myaccount/details';

describe('<Details />', () => {
    it('Sample Details', () => {
        const tree = renderer.create(<Details />).toJSON();
        console.log(tree)
        expect(tree).toMatchSnapshot();
        expect(tree.type).toBe('RCTScrollView');
        expect(tree.children[0].type).toBe("View");


    });
});