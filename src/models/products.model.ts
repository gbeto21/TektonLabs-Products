import productsDataBase from "./products.mongo";

export async function getProduct(pId: any) {
  const result = await productsDataBase.findById({ _id: pId });
  return result;
}

export async function addProduct(product: any) {
  const result = await productsDataBase.create(product);
  return result;
}

export async function updateProduct(product: any) {
  const result = await productsDataBase.findOneAndUpdate(
    { _id: product.id },
    product
  );
  return result;
}
