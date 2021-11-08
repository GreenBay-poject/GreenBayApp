import React from 'react';
import renderer from 'react-test-renderer';
import Land_Report from '../../../components/land_report/land_report';

describe('<Land_Report />', () => {
    it('Sample Land_Report', () => {
        const tree = renderer.create(<Land_Report image={"https://apktada.com/storage/images/com/johartest/com.johartest_1.png"} setstep={() => { }} />).toJSON();
        console.log(tree)
        expect(tree).toMatchSnapshot();
        expect(tree.type).toBe('RCTScrollView');
        expect(tree.children[0].type).toBe("View");


    });
});