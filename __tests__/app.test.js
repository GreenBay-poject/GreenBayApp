import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('<App />', () => {
    it('Sample App', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
        //expect(tree.children[0].children[0].type).toBe('View');
        //expect(tree.children[0].children[1].type).toBe('View');
        console.log(tree)

    });
});