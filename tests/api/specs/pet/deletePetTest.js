const { addPet, deletePet, getPetById } = require('../../services/petService');
const STATUS = require('../../constants/statusCodes');
const petData = require('../../fixtures/pet/pet-data.json');
const deleteExpected = require('../../fixtures/pet/pet-delete-expected.json');

describe('DELETE pet API tests using PactumJS', () => {
  it('should delete an existing pet', async () => {
    const petId = Date.now();
    const requestBody = {
      ...petData,
      id: petId,
      name: `${petData.name}-${petId}`,
    };

    await addPet(requestBody).expectStatus(STATUS.OK);

    await deletePet(requestBody.id)
      .expectStatus(STATUS.OK)
      .expectJsonMatch('type', deleteExpected.type)
      .expectJsonMatch('message', String(requestBody.id));

    await getPetById(requestBody.id).expectStatus(STATUS.NOT_FOUND);
  });
});
