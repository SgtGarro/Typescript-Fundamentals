import { addProduct, calcStock, products } from './product.service';

addProduct({
  name: 'Product1',
  createdAt: new Date(),
  stock: 12,
  size: 'XL',
});

addProduct({
  name: 'Product2',
  createdAt: new Date(),
  stock: 20,
  size: 'L',
});

console.log(products);

const totalStock = calcStock();

console.log(totalStock);
