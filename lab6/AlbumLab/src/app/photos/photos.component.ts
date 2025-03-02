import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPhotos().subscribe((data) => {
      this.photos = data;
    });
  }

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`
    );
  }

  goBack(): void {
    this.router.navigate([`/albums/${this.albumId}`]);
  }
}
