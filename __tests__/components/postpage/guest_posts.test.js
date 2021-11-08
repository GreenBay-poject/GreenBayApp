import React from 'react';
import renderer from 'react-test-renderer';
import GuestsPosts from '../../../components/postpage/guest_posts';

describe('<GuestsPosts />', () => {
    it('Sample GuestsPosts', () => {
        const tree = renderer.create(<GuestsPosts user={null} />).toJSON();
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