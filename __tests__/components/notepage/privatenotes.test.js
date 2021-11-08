import React from 'react';
import renderer from 'react-test-renderer';
import PrivateNote from '../../../components/notepage/privatenote';

describe('<PrivateNote />', () => {
    it('Sample PrivateNote', () => {
        const tree = renderer.create(<PrivateNote />).toJSON();
        console.log(tree)
        expect(tree).toMatchSnapshot();
        expect(tree.type).toBe('ActivityIndicator');
        // expect(tree.children[0].type).toBe("Text");
        // expect(tree.children[1].type).toBe("TextInput");
        // expect(tree.children[2].type).toBe("TextInput");
        // expect(tree.children[3].type).toBe("View");
        // expect(tree.children[4].type).toBe("Text");


    });
});