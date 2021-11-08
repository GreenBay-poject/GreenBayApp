import React from 'react';
import renderer from 'react-test-renderer';
import NotePage from '../../pages/note_page'
import { requestAllQuestions } from '../../server/qnarequestgenerator';

describe('QnAGenerator', () => {
    it('All Questions ', async () => {
        var response = await requestAllQuestions('mashkarharis3@gmail.com', 'RYPWXPWEEYZZSGNHGIQXRSYNQ');
        expect(response.data['ALL_QUESTIONS'] != null).toBe(true)
    });
});