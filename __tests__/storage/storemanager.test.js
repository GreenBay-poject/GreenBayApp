import { get_email_auth, get_email_token_auth, saveSignInData } from '../../storage/storemanager';

describe('Store Manager', () => {
    it('saveSignInData', async () => {
        var response = await saveSignInData("mashkarharis3@gmail.com", "ADSBEBFIFIHFIFBSI", false)
        expect(response == null).toBe(true)
    });
    it('get_email_auth', async () => {
        var response = await get_email_auth()
        expect(response != null).toBe(true)
    });
    it('get_email_token_auth', async () => {
        var response = await get_email_token_auth()
        expect(response != null).toBe(true)
    });
});