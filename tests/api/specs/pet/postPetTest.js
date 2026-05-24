const { addPet } = require('../../services/petService');
const STATUS = require('../../constants/statusCodes');
const petData = require('../../fixtures/pet/pet-data.json');

describe('POST pet API tests using PactumJS', () => {
  it('should add a new pet', async () => {
    const petId = Date.now();
    const requestBody = {
      ...petData,
      id: petId,
      name: `${petData.name}-${petId}`,
    };

    await addPet(requestBody)
      .expectStatus(STATUS.OK)
      .expectJsonMatch('id', requestBody.id)
      .expectJsonMatch('name', requestBody.name)
      .expectJsonMatch('status', requestBody.status)
      .expectJsonSchema({
        type: 'object',
        required: ['id', 'name', 'photoUrls'],
        properties: {
          id: { type: 'number', const: requestBody.id },
          name: { type: 'string', const: requestBody.name },
          status: { type: 'string', const: requestBody.status },
          photoUrls: {
            type: 'array',
            minItems: 1,
            items: { type: 'string' },
          },
        },
      });
  });
});
