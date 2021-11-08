import React from 'react';
import renderer from 'react-test-renderer';
import AuthPosts from '../../../components/postpage/auth_posts';

describe('<AuthPosts />', () => {
    it('Sample AuthPosts', () => {
        const tree = renderer.create(<AuthPosts />).toJSON();
        console.log(tree)
        expect(tree).toMatchSnapshot();
        // expect(tree.children[0].type).toBe("Text");
        // expect(tree.children[1].type).toBe("TextInput");
        // expect(tree.children[2].type).toBe("TextInput");
        // expect(tree.children[3].type).toBe("View");
        // expect(tree.children[4].type).toBe("Text");


    });
});