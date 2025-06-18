/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryFilterComponent } from '../category-filter/category-filter.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,  FormsModule, RouterModule, ProductCardComponent, CategoryFilterComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  products = [
    {
    id: 1,
    title: 'Workshop de Agricultura Sustentável',
    category: 'workshop',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3',
    department: 'Departamento de Agronomia',
    coordinator: 'Prof. Maria Silva',
    date: '25/04/2023',
    participants: 45,
    description: 'Workshop prático sobre técnicas de agricultura sustentável para pequenos produtores.'
  },
  {
    id: 2,
    title: 'Feira de Ciências Comunitária',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3',
    department: 'Departamento de Ciências',
    coordinator: 'Prof. João Costa',
    date: '15/05/2023',
    participants: 45,
    description: 'Feira de ciências interativa com demonstrações e experimentos para a comunidade.',
  },
  {
    id: 3,
    title: 'Projeto Saúde na Comunidade',
    category: 'project',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3',
    department: 'Departamento de Saúde',
    coordinator: 'Prof. Ana Oliveira',
    date: 'Contínuo',
    participants: 150,
    description: 'Atendimento médico e orientação de saúde para comunidades carentes.',
  },
  {
    id: 4,
    title: 'Curso de Inclusão Digital',
    category: 'course',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3',
    department: 'Departamento de Computação',
    coordinator: 'Prof. Carlos Mendes',
    date: '20/06/2023',
    participants: 30,
    description: 'Curso básico de informática para idosos e pessoas em vulnerabilidade social.',
  },{
    id: 5,
    title: 'Festival Cultural UESC',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3',
    department: 'Departamento de Artes',
    coordinator: 'Prof. Paula Santos',
    date: '20/06/2023',
    participants: 500,
    description: 'Festival de arte e cultura com apresentações de música, dança e teatro.'
  }, {
    id: 6,
    title: 'Oficina de Reciclagem',
    category: 'workshop',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3',
    department: 'Departamento de Meio Ambiente',
    coordinator: 'Prof. Roberto Lima',
    date: '05/07/2023',
    participants: 35,
    description: 'Oficina prática sobre reciclagem e reaproveitamento de materiais.'
  }
  ];

  selectedCategory: string = 'Todos';
   searchTerm: string = '';
  categories = ['Todos', 'workshop', 'event', 'project', 'course'];

  get filteredProducts() {
    return this.selectedCategory === 'Todos'
      ? this.products
      : this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryFilterComponent } from '../category-filter/category-filter.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ProductCardComponent, CategoryFilterComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  products: Product[] = [];
  selectedCategory = 'Todos';
  searchTerm = '';
  categories = ['Todos', 'workshop', 'event', 'project', 'course'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });
  }

  get filteredProducts(): Product[] {
    const filteredByCategory = this.selectedCategory === 'Todos'
      ? this.products
      : this.products.filter(p => p.category === this.selectedCategory);

    return filteredByCategory.filter(p =>
      p.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}

