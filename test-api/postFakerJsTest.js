const { spec } = require('pactum');
require('dotenv').config()
const baseUrl = process.env.PACTUM_REQUEST_BASE_URL;
const { faker } = require('@faker-js/faker');

const randomName = faker.name.firstName();
const randomJob = faker.name.jobTitle();

describe('POST API tests using PactumJS', () => {

    it('should successfully pass the test for post API when test data generated using fakerjs', async () => {
        await spec()
            .post(baseUrl + '/api/users')
            .withJson({
                "name": randomName,
                "job": randomJob
            })
            .expectStatus(201)
            .expectJsonMatch('name', randomName)
            .expectJsonMatch('job', randomJob);
    });
});