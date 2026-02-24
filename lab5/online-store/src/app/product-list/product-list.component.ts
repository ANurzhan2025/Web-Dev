import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  constructor(private productService: ProductService) {}

  onLike(productId: number) {
    this.productService.likeProduct(productId);
    this.products = this.products.map(p => 
      p.id === productId ? { ...p, likes: p.likes + 1 } : p
    );
  }

  onDelete(productId: number) {
    this.productService.deleteProduct(productId)

    this.products = this.products.filter(p => p.id !== productId);
  }
}
