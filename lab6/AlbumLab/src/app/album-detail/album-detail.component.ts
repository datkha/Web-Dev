import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  imports: [CommonModule, RouterModule, FormsModule, RouterLink],
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any = {};
  updatedAlbum: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe((data) => {
      this.album = data;
      this.updatedAlbum = this.album.title;
    })
  }

  saveAlbum(): void {
    this.album.title = this.updatedAlbum;
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe();
  }
}