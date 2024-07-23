import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnsplashImage } from '../models/unsplash.model';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private accessKey = 'YOUR_UNSPLASH_ACCESS_KEY';
  private apiUrl = `https://api.unsplash.com/photos/?client_id=${this.accessKey}`;

  constructor(private http: HttpClient) {}

  getImages(): Observable<UnsplashImage[]> {
    return this.http.get<UnsplashImage[]>(this.apiUrl);
  }
}
