const { spec } = require('pactum');
require('dotenv').config()
const baseUrl = process.env.PACTUM_REQUEST_BASE_URL;

describe('GET API tests using PactumJS', () => {

    it('should successfully pass the test for single user GET API', async () => {
        await spec()
            .get(baseUrl + '/api/users/23')
            .expectStatus(404);
    });
});