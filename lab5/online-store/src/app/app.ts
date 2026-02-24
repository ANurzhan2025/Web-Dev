import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { Category } from './category.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'online-store';
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.products = this.productService.getProductsByCategory(categoryId);
  }

  isSelected(categoryId: number): boolean {
    return this.selectedCategoryId === categoryId;
  }

  getCategoryName(): string {
    if (!this.selectedCategoryId) return '';
    const category = this.categories.find(c => c.id === this.selectedCategoryId);
    return category ? category.name : '';
  }
}
