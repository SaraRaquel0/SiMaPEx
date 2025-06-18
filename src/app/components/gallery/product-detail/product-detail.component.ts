/*import { Component, OnInit } from '@angular/core';
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
*/
/*import { Component, OnInit } from '@angular/core';
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
  tabs = ['Fotos', 'Vídeos', 'Documentos', 'Áudio'];
activeTab = 'Fotos';

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
      ],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { type: 'pdf', url: 'https://example.com/documento.pdf' },
        { type: 'audio', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
      ]
    },
    {
    id: 2,
    title: 'Feira de Ciências Comunitária',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3',
    department: 'Departamento de Ciências',
    coordinator: 'Prof. João Costa',
    date: '15/05/2023',
    participants: 120,
    description: 'Feira de ciências interativa com demonstrações e experimentos para a comunidade.',
    links: [
        { label: 'Página do Projeto', url: '#' },
        { label: 'Documentação Completa', url: '#' },
        { label: 'Galeria de Fotos', url: '#' }
      ],
      media: [
        { type: 'image', url: 'https://via.placeholder.com/600x400?text=Foto+1' },
        { type: 'image', url: 'https://via.placeholder.com/600x400?text=Foto+2' },
        { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { type: 'pdf', url: 'https://example.com/documento.pdf' },
        { type: 'audio', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
      ]
  },
  {
    id: 3,
    title: 'Projeto Saúde na Comunidade',
    category: 'project',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3',
    department: 'Departamento de Saúde',
    coordinator: 'Prof. Ana Oliveira',
    date: 'Contínuo',
    participants: 250,
    description: 'Atendimento médico e orientação de saúde para comunidades carentes.',
  links: [
        { label: 'Página do Projeto', url: '#' },
        { label: 'Documentação Completa', url: '#' },
        { label: 'Galeria de Fotos', url: '#' }
      ],
      media: [
        { type: 'image', url: 'https://via.placeholder.com/600x400?text=Foto+1' },
        { type: 'image', url: 'https://via.placeholder.com/600x400?text=Foto+2' },
        { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { type: 'pdf', url: 'https://example.com/documento.pdf' },
        { type: 'audio', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
      ]
  },
  {
    id: 4,
    title: 'Curso de Inclusão Digital',
    category: 'course',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3',
    department: 'Departamento de Computação',
    coordinator: 'Prof. Carlos Mendes',
    date: '10/06/2023',
    participants: 30,
    description: 'Curso básico de informática para idosos e pessoas em vulnerabilidade social.',
    links: [
        { label: 'Página do Projeto', url: '#' },
        { label: 'Documentação Completa', url: '#' },
        { label: 'Galeria de Fotos', url: '#' }
      ],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { type: 'pdf', url: 'https://proex.uesc.br/doc/Relatorios/acoes_dec/grupo_ima_imagem.pdf' },
        { type: 'audio', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
      ]
  },
  {
    id : 5,
    title: 'Festival Cultural UESC',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3',
    department: 'Departamento de Artes',
    coordinator: 'Prof. Paula Santos',
    date: '20/06/2023',
    participants: 500,
    description: 'Festival de arte e cultura com apresentações de música, dança e teatro.',
    links: [
        { label: 'Página do Projeto', url: '#' },
        { label: 'Documentação Completa', url: '#' },
        { label: 'Galeria de Fotos', url: '#' }
      ],
      media: [
        { type: 'image', url: 'https://via.placeholder.com/600x400?text=Foto+1' },
        { type: 'image', url: 'https://via.placeholder.com/600x400?text=Foto+2' },
        { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { type: 'pdf', url: 'https://example.com/documento.pdf' },
        { type: 'audio', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
      ]
  },
  {
    id: 6,
    title: 'Oficina de Reciclagem',
    category: 'workshop',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3',
    department: 'Departamento de Meio Ambiente',
    coordinator: 'Prof. Roberto Lima',
    date: '05/07/2023',
    participants: 35,
    description: 'Oficina prática sobre reciclagem e reaproveitamento de materiais.',
    links: [
        { label: 'Página do Projeto', url: '#' },
        { label: 'Documentação Completa', url: '#' },
        { label: 'Galeria de Fotos', url: '#' }
      ],
      media: [
        { type: 'image', url: 'https://via.placeholder.com/600x400?text=Foto+1' },
        { type: 'image', url: 'https://via.placeholder.com/600x400?text=Foto+2' },
        { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { type: 'pdf', url: 'https://example.com/documento.pdf' },
        { type: 'audio', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
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
}*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  tabs = ['Fotos', 'Vídeos', 'Documentos', 'Áudio'];
activeTab = 'Fotos';

  categoryColors: Record<string, string> = {
    workshop: 'bg-purple-100 text-purple-800',
    event: 'bg-blue-100 text-blue-800',
    project: 'bg-green-100 text-green-800',
    course: 'bg-orange-100 text-orange-800'
  };

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getById(id).subscribe((data) => {
      this.product = data;
    });
  }
}

