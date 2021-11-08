import React from 'react';
import renderer from 'react-test-renderer';
import Image_Viewer from '../../../components/land_report/image_viewer';

describe('<Image_Viewer />', () => {
    it('Sample Image_Viewer', () => {
        const tree = renderer.create(<Image_Viewer latitude={67.3} longitude={34.65} date={'2021-11-02'} image={"https://apktada.com/storage/images/com/johartest/com.johartest_1.png"} setimage={null} setstep={null} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.type).toBe('View');
        expect(tree.children[0].type).toBe("View");
        expect(tree.children[1].type).toBe("View");
        expect(tree.children[2].type).toBe("Image");
        console.log(tree)

    });
});