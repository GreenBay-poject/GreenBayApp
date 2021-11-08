import React from 'react';
import renderer from 'react-test-renderer';
import Land_Report_page from '../../pages/land_report_page'

describe('<Land_Report_page />', () => {
    it('Sample Land_Report_page', () => {
        const tree = renderer.create(<Land_Report_page />).toJSON();
        expect(tree).toMatchSnapshot();
        //expect(tree.children[0].children[0].type).toBe('View');
        //expect(tree.children[0].children[1].type).toBe('View');
        //console.log(tree)

    });
});