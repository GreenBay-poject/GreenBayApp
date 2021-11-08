import React from 'react';
import renderer from 'react-test-renderer';
import Land_Report_Map from '../../../components/land_report/land_report_map';

describe('<Land_Report_Map />', () => {
    it('Sample Land_Report_Map', () => {
        const tree = renderer.create(<Land_Report_Map setlatitude={() => { }} setlongitude={() => { }} latitude={67.3} longitude={34.65} date={'2021-11-02'} setdates={() => { }} setstep={() => { }} />).toJSON();
        console.log(tree)
        expect(tree).toMatchSnapshot();
        // expect(tree.type).toBe('View');
        // expect(tree.children[0].type).toBe("View");
        // expect(tree.children[1].type).toBe("View");
        // expect(tree.children[2].type).toBe("Image");


    });
});