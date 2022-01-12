import express, { Router } from "express";
import {
  httpGetProduct,
  httpAddProduct,
  httpUpdateProduct,
} from "./products.controller";

const productsRouter: Router = express.Router();
productsRouter.get("/:id", httpGetProduct);
productsRouter.post("/", httpAddProduct);
productsRouter.put("/", httpUpdateProduct);

export default productsRouter;
