// test.js
const { spec } = require('pactum');

it('should get a response with status code 200', async () => {
    await spec()
        .get('https://reqres.in/api/users/2')
        .expectStatus(200);
});