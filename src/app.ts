import express, { Application, Request, Response, NextFunction } from "express";
import BodyParser from "body-parser";
import api from "./routes/api";
import { mongoConnect } from "./services/mongo";

const app: Application = express();
const PORT: number = 3000;

const add = (a: number, b: number): number => a + b;

// parse application/x-www-form-urlencoded
app.use(BodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(BodyParser.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(add(4, 5));

  res.send("Hello");
});

app.use(api);

app.listen(PORT, async () => {
  console.log("Server running.");

  try {
    await mongoConnect();
  } catch (error) {
    console.error("Error connecting to the Database: ", error);
  }
});
