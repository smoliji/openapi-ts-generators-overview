import { Api } from "./results/swagger-typescript-api/output/index.ts/Api";

const api = new Api({
  baseUrl: 'https://webhook.site/717e76bc-4b91-4c8f-8037-73507118e2d5'
});

api.pet.addPet({
  name: "test",
  public: true,
  photoUrls: [],
});
