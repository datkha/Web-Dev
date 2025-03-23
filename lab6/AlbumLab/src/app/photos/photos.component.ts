import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../albums.service';

@Component({
  imports: [
    CommonModule,
    RouterLink
  ],
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
    private http: HttpClient,
    private albumService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getPhotos(this.albumId).subscribe((data) => {
      this.photos = data;
    })
  }

}
