import productsDataBase from "./products.mongo";

export async function getProduct(pId: any) {
  const result = await productsDataBase.findById({ _id: pId });
  return result;
}

export async function addProduct(product: any) {
  const result = await productsDataBase.create(product);
  return result;
}

export async function updateProduct(idProduct: string, product: any) {
  const result = await productsDataBase.findOneAndUpdate(
    { _id: idProduct },
    product
  );
  return result;
}
