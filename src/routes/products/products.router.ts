import express, { Router } from "express";
import { httpGetProducts } from "./products.controller";

const productsRouter: Router = express.Router();
productsRouter.get("/", httpGetProducts);

export default productsRouter
