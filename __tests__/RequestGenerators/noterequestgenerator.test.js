import React from 'react';
import renderer from 'react-test-renderer';
import NotePage from '../../pages/note_page'
import { requestPrivateNotes, requestPublicNotes } from '../../server/noterequestgenerator';

describe('NoteGenerator', () => {
    it('Public Notes ', async () => {
        var response = await requestPublicNotes()
        expect(response.data['ALL_NOTES'] != null).toBe(true)
    });
    it('Private Notes ', async () => {
        var response = await requestPrivateNotes('mashkarharis3@gmail.com', 'RYPWXPWEEYZZSGNHGIQXRSYNQ')
        expect(response.data['All_Notes_user'] != null).toBe(true)
    });
});