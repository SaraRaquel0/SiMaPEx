import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  mockProducts = [
    {
      id: 1,
      title: 'Workshop de Agricultura Sustentável',
      category: 'workshop',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3',
      department: 'Departamento de Agronomia',
      coordinator: 'Prof. Maria Silva',
      date: '25/04/2023',
      participants: 45,
      description: 'Workshop prático sobre técnicas de agricultura sustentável para pequenos produtores.',
      links: [
        { label: 'Página do Projeto', url: '#' },
        { label: 'Documentação Completa', url: '#' },
        { label: 'Galeria de Fotos', url: '#' }
      ]
    }
  ];

  categoryColors: Record<string, string> = {
    workshop: 'bg-purple-100 text-purple-800',
    event: 'bg-blue-100 text-blue-800',
    project: 'bg-green-100 text-green-800',
    course: 'bg-orange-100 text-orange-800'
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.mockProducts.find(p => p.id === id);
  }
}
