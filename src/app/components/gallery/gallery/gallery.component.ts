import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryFilterComponent } from '../category-filter/category-filter.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent, CategoryFilterComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  products = [
    { id: 1, name: 'Produto A', category: 'Categoria 1', image: 'url1.jpg', description: 'Descrição do Produto A' },
    { id: 2, name: 'Produto B', category: 'Categoria 2', image: 'url2.jpg', description: 'Descrição do Produto B' },
    { id: 3, name: 'Produto C', category: 'Categoria 1', image: 'url3.jpg', description: 'Descrição do Produto C' }
  ];

  selectedCategory: string = 'Todos';
  categories = ['Todos', 'Categoria 1', 'Categoria 2'];

  get filteredProducts() {
    return this.selectedCategory === 'Todos'
      ? this.products
      : this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}

