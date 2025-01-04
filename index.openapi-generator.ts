import * as openapi from './results/openapi-generator/output/dist'

const petApi = new openapi.PetApi(openapi.createConfiguration({
  baseServer: new openapi.ServerConfiguration('https://webhook.site/717e76bc-4b91-4c8f-8037-73507118e2d5', {}),
}))

const pet = new openapi.Pet()
pet.name = 'test'
pet.photoUrls = ['test']
pet.status = openapi.PetStatusEnum.Available
pet._public = true

petApi.addPet(pet)

