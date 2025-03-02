import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  viewAlbum(id: number): void {
    this.router.navigate([`/albums/${id}`]);
  }
}