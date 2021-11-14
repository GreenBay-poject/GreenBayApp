import React from 'react';
import renderer from 'react-test-renderer';
import NotePage from '../../pages/note_page'
import { requestLogOut, requestSignIn, requestSignUp, requestUserData } from '../../server/requestgenerator';

var token = null

describe('Request Generator', () => {
    it('Request user Data', async () => {
        var response = await requestUserData('RYPWXPWEEYZZSGNHGIQXRSYNQ', 'mashkarharis3@gmail.com');
        expect(response.data['UserDetails'] != null).toBe(true)
    });
    it('Log In User', async () => {
        var response = await requestSignIn('mashkarharis3@gmail.com', 'ABC123');
        token = response.data['Token']['value']
        expect(response.data['Token']['value'] != null).toBe(true)
    });
    it('Log Out User', async () => {
        var response = await requestLogOut(token, 'mashkarharis3@gmail.com');
        expect(response.data["Message"] == "logged out Successfully").toBe(true)
    });
    it('Sign Up User', async () => {
        var response = await requestSignUp("Name_SUP", "mashkarharis" + Date.now() + "@gmail.com", "21", "Address_SUP", "Male", "80000");
        expect(response.data["content"] == "Successfully Registered").toBe(true)
    });
});

