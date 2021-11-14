import React from 'react';
import renderer from 'react-test-renderer';
import PublicNote from '../../../components/notepage/publicnote';

describe('<PublicNote />', () => {
    it('Sample PublicNote', () => {
        const tree = renderer.create(<PublicNote />).toJSON();
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