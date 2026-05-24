const { spec } = require('pactum');

const PETS_ENDPOINT = '/pet';

function addPet(body) {
  return spec()
    .post(PETS_ENDPOINT)
    .withJson(body)
    .expectHeaderContains('content-type', 'application/json');
}

function getPetById(petId) {
  return spec()
    .get(`${PETS_ENDPOINT}/${petId}`)
    .expectHeaderContains('content-type', 'application/json');
}

function findPetsByStatus(status) {
  return spec()
    .get(`${PETS_ENDPOINT}/findByStatus`)
    .withQueryParams({ status })
    .expectHeaderContains('content-type', 'application/json');
}

function deletePet(petId) {
  return spec().delete(`${PETS_ENDPOINT}/${petId}`);
}

module.exports = {
  addPet,
  getPetById,
  findPetsByStatus,
  deletePet,
};
