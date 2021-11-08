import React from 'react';
import renderer from 'react-test-renderer';

import PostCard from '../../atoms/post'

describe('<PostCard />', () => {
    it('Sample PostCard With no Null Image', () => {
        const tree = renderer.create(<PostCard Image={"https://www.testbytes.net/wp-content/uploads/2019/12/benefits-of-end-to-end-testing-1-scaled.jpg"} Title={"Title 1"} Description={"Sample Desc."} DatePosted={"2021-08-02"} email={"SamaSilva@gmail.com"} post_id={"24240"} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children[0].children.length).toBe(8);
    });
    it('Sample PostCard With Null Image', () => {
        const tree = renderer.create(<PostCard Image={""} Title={"Title 1"} Description={"Sample Desc."} DatePosted={"2021-08-02"} email={"SamaSilva@gmail.com"} post_id={"24240"} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children[0].children.length).toBe(8);
    });
});