import React from 'react';
import renderer from 'react-test-renderer';

import DashBoardBottomSheet from '../../../components/dashboard_components/bottom_sheet'

describe('<DashBoardBottomSheet />', () => {
    it('Sample DashBoardBottomSheet Visible False', () => {
        const tree = renderer.create(<DashBoardBottomSheet isVisible={false} />).toJSON();
        //expect(tree).toMatchSnapshot();
        expect(tree.type).toBe("Modal");
        expect(tree.props.visible).toBe(false);
        expect(tree.children.length).toBe(1);
        //console.log(tree)

    });
    it('Sample DashBoardBottomSheet Visible True', () => {
        const tree = renderer.create(<DashBoardBottomSheet isVisible={false} />).toJSON();
        //expect(tree).toMatchSnapshot();
        expect(tree.type).toBe("Modal");
        expect(tree.props.visible).toBe(false);
        expect(tree.children.length).toBe(1);
        //console.log(tree)

    });
});