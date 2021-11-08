import React from 'react';
import renderer from 'react-test-renderer';

import StretchCard from '../../atoms/stretch_card'

describe('<StretchCard />', () => {
    it('Sample StretchCard', () => {
        const tree = renderer.create(<StretchCard imagelink={"book"} paragraph={"Sample Paragraph"} title={"Sample"} navigation={null} page_to_go={"Dashboard"} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children[0].children[0].type).toBe('View');
        expect(tree.children[0].children[1].type).toBe('View');
        //console.log(tree.children[0].children[0].type)

    });
});