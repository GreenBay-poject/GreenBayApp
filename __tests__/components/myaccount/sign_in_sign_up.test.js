import React from 'react';
import renderer from 'react-test-renderer';
import SignInForm from '../../../components/myaccount/sign_in_sign_up';

describe('<SignInForm />', () => {
    it('Sample SignInForm', () => {
        const tree = renderer.create(<SignInForm />).toJSON();
        console.log(tree)
        expect(tree).toMatchSnapshot();
        expect(tree.type).toBe('RCTSafeAreaView');
        expect(tree.children[0].type).toBe("Text");
        expect(tree.children[1].type).toBe("TextInput");
        expect(tree.children[2].type).toBe("TextInput");
        expect(tree.children[3].type).toBe("View");
        expect(tree.children[4].type).toBe("Text");


    });
});