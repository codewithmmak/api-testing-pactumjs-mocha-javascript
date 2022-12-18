const { spec } = require('pactum');
require('dotenv').config()
const baseUrl = process.env.PACTUM_REQUEST_BASE_URL;
const userData = require('../test-data/user-data.json');

describe('POST API tests using PactumJS', () => {

    it('should successfully pass the test for post API when test data is passed using JSON', async () => {
        await spec()
            .post(baseUrl + '/api/users')
            .withJson(userData)
            .expectStatus(201)
            .expectJsonMatch('name', 'Mike Tyson')
            .expectJsonMatch('job', 'Boxer');
    });
});