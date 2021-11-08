import React from 'react';
import renderer from 'react-test-renderer';

import CustomIconButton from '../../atoms/icon_button'

describe('<CustomIconButton />', () => {
    it('Sample CustomIconButton', () => {
        const tree = renderer.create(<CustomIconButton ant_design_icon_name={"book"} text={"Sample"} navigation={null} page_to_go={"Dashboard"} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toBe(1);
        expect(tree.children[0].children.length).toBe(2);

    });
});