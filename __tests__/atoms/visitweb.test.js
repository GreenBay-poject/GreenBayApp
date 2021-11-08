import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-test-renderer';
import VisitWeb from '../../atoms/visitweb'

describe('<VisitWeb />', () => {
    it('Sample VisitWeb', () => {
        const tree = renderer.create(<VisitWeb url={"http://www.google.com"} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree.type).toBe('View')
        expect(tree.children.length).toBe(1);
        expect(tree.children[0].type).toBe('View');
        expect(tree.children[0].children[0].type).toBe('Text');
    });
});