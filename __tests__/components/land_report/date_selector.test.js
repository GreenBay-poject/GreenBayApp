import React from 'react';
import renderer from 'react-test-renderer';

import Date_Selector from '../../../components/land_report/date_selector'

describe('<Date_Selector />', () => {
    it('Sample Date_Selector', () => {
        const tree = renderer.create(<Date_Selector dates={['2021-08-11']} setdates={null} latitude={80.34} longitude={23.54} date={'2021-08-11'} setdate={null} setstep={null} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.type).toBe('View');
        expect(tree.children[0].type).toBe("View");
        expect(tree.children[1].type).toBe("View");
        expect(tree.children[2].type).toBe("RCTScrollView");
        //console.log(tree)
    });
});