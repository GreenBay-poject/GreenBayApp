import React from 'react';
import renderer from 'react-test-renderer';
import NotePage from '../../pages/note_page'
import { requestAllPosts } from '../../server/postrequestgenerator';

describe('PostGenerator', () => {
    it('All Posts ', async () => {
        var response = await requestAllPosts();
        expect(response.data['ALL_POSTS'] != null).toBe(true)
    });
});