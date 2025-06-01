import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery/gallery.component';
import { ProductDetailComponent } from './components/gallery/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'galeria', pathMatch: 'full' },
  { path: 'galeria', component: GalleryComponent },
  { path: 'produto/:id', component: ProductDetailComponent }
];

