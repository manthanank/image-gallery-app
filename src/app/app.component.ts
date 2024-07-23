import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'image-gallery-app';
}
