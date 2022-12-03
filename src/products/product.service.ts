import { Product } from './product.model';

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
};
const calcStock = (): number => {
  return products.reduce((total, item) => (total += item.stock), 0);
};

export { products, addProduct, calcStock };
