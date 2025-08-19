import { Component, signal } from '@angular/core';
import { ProductList } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
