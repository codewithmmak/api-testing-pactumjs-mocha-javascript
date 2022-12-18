const { spec } = require('pactum');
require('dotenv').config()
const baseUrl = process.env.PACTUM_REQUEST_BASE_URL;

describe('DELETE API tests using PactumJS', () => {

    it('should successfully pass the test for DELETE API', async () => {
        await spec()
            .delete(baseUrl + '/api/users/2')
            .expectStatus(204);
    });
});