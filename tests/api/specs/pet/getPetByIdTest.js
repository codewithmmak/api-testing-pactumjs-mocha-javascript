const { addPet, getPetById } = require('../../services/petService');
const STATUS = require('../../constants/statusCodes');
const petData = require('../../fixtures/pet/pet-data.json');

describe('GET pet by id API tests using PactumJS', () => {
  it('should return a pet by id', async () => {
    const petId = Date.now();
    const requestBody = {
      ...petData,
      id: petId,
      name: `${petData.name}-${petId}`,
    };

    await addPet(requestBody).expectStatus(STATUS.OK);

    await getPetById(requestBody.id)
      .expectStatus(STATUS.OK)
      .expectJsonMatch('id', requestBody.id)
      .expectJsonMatch('name', requestBody.name)
      .expectJsonMatch('status', requestBody.status);
  });
});
