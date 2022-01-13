import supertest from "supertest";
import App from "../../../app";
import { mongoDisconnect } from "../../../services/mongo";

const api = supertest(App.app);

test("Probando get product ", async () => {
  await api
    .get("/products/61df4314b0c2f948817e68dc")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

afterAll(() => {
  mongoDisconnect();
  App.server.close();
});
