import React from 'react';
import renderer from 'react-test-renderer';

import IntroCard from '../../atoms/card'

describe('<IntroCard />', () => {
    it('Sample Card', () => {
        const tree = renderer.create(<IntroCard title={"Title_1"} paragraph={"Sample Paragraph"} imagelink={"https://www.testbytes.net/wp-content/uploads/2019/12/benefits-of-end-to-end-testing-1-scaled.jpg"} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toBe(2);
        expect(tree.children[1].children[0]).toBe("Sample Paragraph");
        //console.log(tree.children)
    });
});