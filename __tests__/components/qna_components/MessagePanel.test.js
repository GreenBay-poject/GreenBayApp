import React from 'react';
import renderer from 'react-test-renderer';
import MessagePanel from '../../../components/qna_components/MessagePanel';

describe('<MessagePanel />', () => {
    it('Sample MessagePanel', () => {
        const tree = renderer.create(<MessagePanel set_ministry_selected={null} messagetoshow={"Testing"} />).toJSON();
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