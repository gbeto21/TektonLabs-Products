import { body } from "express-validator";

const validatorSchema = [
  body("name").isLength({ min: 5 }),
  body("description").isLength({ min: 8 }),
  body("unitPrice").isNumeric(),
];

export default validatorSchema;
