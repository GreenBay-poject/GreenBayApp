import React from 'react';
import renderer from 'react-test-renderer';
import PostPage from '../../pages/posts_page'

describe('<PostPage />', () => {
    it('Sample PostPage', () => {
        const tree = renderer.create(<PostPage />).toJSON();
        expect(tree).toMatchSnapshot();
        //expect(tree.children[0].children[0].type).toBe('View');
        //expect(tree.children[0].children[1].type).toBe('View');
        //console.log(tree)

    });
});