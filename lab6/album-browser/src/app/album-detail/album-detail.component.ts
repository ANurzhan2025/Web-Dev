import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;
  saving = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching album:', error);
        this.loading = false;
      }
    });
  }

  saveTitle() {
    if (this.album && this.editedTitle !== this.album.title) {
      this.saving = true;
      const updatedAlbum = { ...this.album, title: this.editedTitle };
      
      this.albumService.updateAlbum(updatedAlbum).subscribe({
        next: (data) => {
          this.album = data;
          this.saving = false;
        },
        error: (error) => {
          console.error('Error updating album:', error);
          this.saving = false;
        }
      });
    }
  }
}
