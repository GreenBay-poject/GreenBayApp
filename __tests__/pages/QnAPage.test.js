import React from 'react';
import renderer from 'react-test-renderer';
import QnAPage from '../../pages/qnapage'

describe('<QnAPage />', () => {
    it('Sample QnAPage', () => {
        const tree = renderer.create(<QnAPage />).toJSON();
        expect(tree).toMatchSnapshot();
        //expect(tree.children[0].children[0].type).toBe('View');
        //expect(tree.children[0].children[1].type).toBe('View');
        //console.log(tree)

    });
});