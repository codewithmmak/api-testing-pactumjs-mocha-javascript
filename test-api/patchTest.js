const { spec } = require('pactum');
require('dotenv').config()
const baseUrl = process.env.PACTUM_REQUEST_BASE_URL;
const minorUpdatedUserData = require('../test-data/minor-updated-user-data.json');

describe('PATCH API tests using PactumJS', () => {

    it('should successfully pass the test for PATCH API', async () => {
        await spec()
            .put(baseUrl + '/api/users/2')
            .withJson(minorUpdatedUserData)
            .expectStatus(200)
            .expectJsonMatch('job', 'Boxer');
    });
});