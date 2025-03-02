import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateAlbum(id: number, album: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
