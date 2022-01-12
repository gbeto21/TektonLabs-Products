import express, { Router } from "express";
import productsRouter from "./products/products.router";

const api: Router = express.Router();
api.use("/products", productsRouter);

export default api;
