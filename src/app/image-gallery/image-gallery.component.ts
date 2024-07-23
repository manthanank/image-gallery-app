import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../services/unsplash.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
})
export class ImageGalleryComponent implements OnInit {
  images: Image[] = [];
  filteredImages: Image[] = [];
  isLoading = false;
  error: string = '';

  constructor(private unsplashService: UnsplashService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.unsplashService.getImages().subscribe((data) => {
      this.isLoading = false;
      this.images = data.map(img => ({
        url: img.urls.small,
        title: img.alt_description || 'No title',
        description: img.description || 'No description',
        orientation: img.width > img.height ? 'horizontal' : 'vertical'
      }));
      this.filteredImages = this.images;
    }, (error) => {
      this.isLoading = false;
      this.error = error.error.message || error.message || 'An error occurred';
      console.error('Error fetching images', error);
    });
  }

  filterImages(orientation: string): void {
    if (orientation === 'all') {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(img => img.orientation === orientation);
    }
  }
}
