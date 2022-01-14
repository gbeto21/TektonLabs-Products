import express, { Application } from "express";
require("dotenv").config();
import cors from "cors";
import BodyParser from "body-parser";
import api from "./routes/api";
import { mongoConnect } from "./services/mongo";

const app: Application = express();
const PORT: number = 3000;

app.use(cors());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

app.use(`/${process.env.NODE_ENV}`, api);

const server = app.listen(PORT, async () => {
  console.log("Server running.");

  try {
    await mongoConnect();
  } catch (error) {
    console.error("Error connecting to the Database: ", error);
  }
});

export default { app, server };
