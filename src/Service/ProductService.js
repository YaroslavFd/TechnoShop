import { PRODUCTS } from '../data/products';

export default class ProductService {
  #products = [];
  constructor() {
    this.#products = PRODUCTS;
  }

  getProduct(id) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const product = this.#products.find((p) => p.id === id);
        if (!product) {
          reject('Product is not found');
        }
        resolve(product);
      }, 500)
    );
  }

  getProducts() {
    return new Promise((resolve) =>
      setTimeout(() => resolve(this.#products), 500)
    );
  }
}
