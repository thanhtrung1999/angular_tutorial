import { Injectable } from "@angular/core";

class ProductModel {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku
    this.name = name
    this.price = price
  }
}

interface CartItem {
  product: ProductModel;
  quantity: number;
}

@Injectable()
export class CartExtService {

  calculateTotal(): number {
    // call external datasource
    return Math.random() * 100;
  }
  addToCart(): void {
    // logic here
  }
}

@Injectable({
  providedIn: 'root',
  useClass: CartExtService,
})
export class CartService {
  selectedProducts: CartItem[] = [];
  calculateTotal(): number {
    return this.selectedProducts.reduce((total, item) => (item.product.price * item.quantity) + total, 0);
  }
  addToCart(): void {
    // logic here
  }
}

