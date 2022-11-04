import { IProduct } from '../interfaces';
import productModel from '../models/productModel';

async function create(product: IProduct) {
  const data = await productModel.create(product);
  
  return { status: 201, data };
}

async function listProducts() {
  const data = await productModel.listProducts();
    
  return { status: 200, data };
}

export default { create, listProducts };