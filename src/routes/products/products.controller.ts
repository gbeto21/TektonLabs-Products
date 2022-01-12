import { Request, Response } from "express";
import {
  getProduct,
  addProduct,
  updateProduct,
} from "../../models/products.model";

export async function httpGetProduct(req: Request, res: Response) {
  try {
    const idProduct = req.params.id;
    const product = await getProduct(idProduct);
    return res.status(200).json(product);
  } catch (error) {
    console.error(`Error geting the product. Error detail: ${error}:`);
    return res.status(500).send("An internal error occurred.");
  }
}

export async function httpAddProduct(req: Request, res: Response) {
  try {
    const product: any = req.body;
    const productSaved: any = await addProduct(product);

    return res
      .status(201)
      .json({ message: "Product saved", product: productSaved });
  } catch (error) {
    console.error(`Error adding the product. Error detail: ${error}:`);
    return res.status(500).send("An internal error occurred.");
  }
}

export async function httpUpdateProduct(req: Request, res: Response) {
  try {
    const product: any = req.body;
    await updateProduct(product);
    return res.status(204).json({ message: "Product updated" });
  } catch (error) {
    console.error(`Error updating the product. Error detail: ${error}:`);
    return res.status(500).send("An internal error occurred.");
  }
}
