import React from 'react';
import renderer from 'react-test-renderer';
import NotePage from '../../pages/note_page'
import { requestavailabledates, requestsateliteimage, request_land_report } from '../../server/reportrequestgenerator';

var url = ''

describe('Report Generator', () => {
    it('Get All Dates', async () => {
        var response = await requestavailabledates(80, 24);
        expect(response.data['All_Dates_Available'] != null).toBe(true)
    }, 30000);
    it('Get Sat Image', async () => {
        var response = await requestsateliteimage(80, 24, '2018-03-26');
        //console.log(response.data)
        url = response.data['Image']['Url']
        expect(response.data['Image'] != null).toBe(true)
        expect(response.data['Image']['Url'] != null).toBe(true)
    }, 30000);

    it('Get Report', async () => {
        var response = await request_land_report(url);
        expect(response.data['Report'] != null).toBe(true)
    }, 30000);
});