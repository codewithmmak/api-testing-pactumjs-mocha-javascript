const { spec } = require('pactum');
require('dotenv').config()
const baseUrl = process.env.PACTUM_REQUEST_BASE_URL;

describe('GET API tests using PactumJS', () => {

    it('should successfully pass the test for single user GET API using query param', async () => {
        await spec()
            .get(baseUrl + '/api/users')
            .withQueryParams({ page: '2' })
            .expectStatus(200)
            .expectJsonMatch('page', 2)
            .expectJsonMatch('data[0].id', 7)
            .expectJsonMatch('data[0].first_name', 'Michael');
    });
});