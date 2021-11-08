import React from 'react';
import renderer from 'react-test-renderer';

import DashboardRows from '../../../components/dashboard_components/dash_row'

describe('<DashboardRows />', () => {
    it('Sample DashboardRows', () => {
        const tree = renderer.create(<DashboardRows navigation={null} />).toJSON();
        console.log(tree)
        expect(tree).toMatchSnapshot();
        expect(tree.type).toBe(undefined);
        expect(tree.length).toBe(3);
        expect(tree[0].type).toBe('View');
        expect(tree[1].type).toBe('View');
        expect(tree[2].type).toBe('View');


    });
});