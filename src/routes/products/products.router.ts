import express, { Router } from "express";
import validatorSchema from "../../schemas/product";
import { validateRequestSchema } from "../../middleware/validateRequest";
import {
  httpGetProduct,
  httpAddProduct,
  httpUpdateProduct,
} from "./products.controller";

const productsRouter: Router = express.Router();
productsRouter.get("/:id", httpGetProduct);
productsRouter.post(
  "/",
  validatorSchema,
  validateRequestSchema,
  httpAddProduct
);
productsRouter.put("/:id", httpUpdateProduct);

export default productsRouter;
