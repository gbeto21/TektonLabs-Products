import supertest from "supertest";
import App from "../../../app";
import helpers from "../helpersTests/helpers";
import { mongoDisconnect } from "../../../services/mongo";
const api = supertest(App.app);

let idProduct: string;
let ruta: string;

test("Agregando un producto", async () => {
  const response = await api
    .post("/products")
    .send(helpers.productTest)
    .expect(201);
  idProduct = response.body.product._id;
  ruta = `/products/${idProduct}`;
  expect(response.body.product.name).toBe(helpers.productTest.name);
});

test("Obteniendo un producto", async () => {
  const response = await api.get(ruta);
  expect(response.body.name).toBe(helpers.productTest.name);
});

test("Actualizando un producto", async () => {
  await api.put(ruta).send(helpers.productUpdateTest).expect(204);
});

afterAll(async () => {
  await mongoDisconnect();
  App.server.close();
});
