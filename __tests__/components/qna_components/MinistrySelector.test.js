import React from 'react';
import renderer from 'react-test-renderer';
import MinistrySelector from '../../../components/qna_components/MinistrySelector';

describe('<MinistrySelector />', () => {
    it('Sample MinistrySelector', () => {
        const tree = renderer.create(<MinistrySelector all_messages={"Msg1", "Msg2"} setmessagetoshow={() => { }} set_ministry_selected={() => { }} />).toJSON();
        console.log(tree)
        expect(tree).toMatchSnapshot();
        expect(tree.type).toBe('RCTScrollView');
        expect(tree.children[0].type).toBe("View");
        // expect(tree.children[1].type).toBe("TextInput");
        // expect(tree.children[2].type).toBe("TextInput");
        // expect(tree.children[3].type).toBe("View");
        // expect(tree.children[4].type).toBe("Text");


    });
});