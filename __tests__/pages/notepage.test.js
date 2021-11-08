import React from 'react';
import renderer from 'react-test-renderer';
import NotePage from '../../pages/note_page'

describe('<NotePage />', () => {
    it('Sample NotePage', () => {
        const tree = renderer.create(<NotePage />).toJSON();
        expect(tree).toMatchSnapshot();
        //expect(tree.children[0].children[0].type).toBe('View');
        //expect(tree.children[0].children[1].type).toBe('View');
        //console.log(tree)

    });
});