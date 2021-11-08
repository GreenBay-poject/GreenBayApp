import React from 'react';
import renderer from 'react-test-renderer';

import Bubble from '../../atoms/Bubble'

describe('<Bubble />', () => {
    it('With Null Answer', () => {
        const tree = renderer.create(<Bubble by={"Saman Perera"} ans={null} title={"Sample Title"} question={"Sample Question"} date={"2021-11-02"} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toBe(2);
        expect(tree.children[1].children[0].children[0]).toBe('Not Answered Yet');
        //console.log(tree.children[1].children[0].children[0])
    });
    it('With Not Null Answer', () => {
        const tree = renderer.create(<Bubble by={"Saman Perera"} ans={"Sample Answer"} title={"Sample Title"} question={"Sample Question"} date={"2021-11-02"} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toBe(2);
        expect(tree.children[1].children.length).toBe(3);
        //console.log(tree.children[1].children.length).toBe(3)
    });
});