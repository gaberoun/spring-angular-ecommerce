import { Component, DestroyRef, inject, NgModule, NgModuleRef, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductList implements OnInit {
  products: Product[] = [];
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    console.log("Fetching products...")
    this.listProducts();
  }

  listProducts() {
    const subscription = this.productService
      .getProductList()
      .subscribe((data) => (this.products = data));

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  
}
