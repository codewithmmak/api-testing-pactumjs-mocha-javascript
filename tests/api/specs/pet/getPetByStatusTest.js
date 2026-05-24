const { findPetsByStatus } = require('../../services/petService');
const STATUS = require('../../constants/statusCodes');
const statusQuery = require('../../fixtures/pet/pet-status-query.json');

describe('GET pet by status API tests using PactumJS', () => {
  it('should return pets filtered by status', async () => {
    await findPetsByStatus(statusQuery.status)
      .expectStatus(STATUS.OK)
      .expectJsonSchema({
        type: 'array',
        minItems: 1,
        items: {
          type: 'object',
          required: ['id', 'name', 'photoUrls'],
          properties: {
            id: { type: 'number' },
            name: { type: 'string' },
            status: { type: 'string' },
            photoUrls: {
              type: 'array',
              items: { type: 'string' },
            },
          },
        },
      });
  });
});
