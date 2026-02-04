import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Post } from '../data.service';

@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  isLoading = true;
  searchTerm = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Fetch posts from service
    this.dataService.getPosts().subscribe({
      next: (posts) => {
        console.log('Posts loaded:', posts.length);
        this.posts = posts;
        this.filteredPosts = posts;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading posts:', error);
        this.isLoading = false;
      }
    });
  }
  onSearchChange(searchTerm: string) {
    console.log('Search term changed:', searchTerm);

    if (!searchTerm || !searchTerm.trim()) {
      console.log('No search term, showing all posts');
      this.filteredPosts = this.posts;
      return;
    }

    const term = searchTerm.toLowerCase().trim();
    this.filteredPosts = this.posts.filter(post =>
      post.title.toLowerCase().includes(term) ||
      post.body.toLowerCase().includes(term)
    );
    console.log('Filtered results:', this.filteredPosts.length);
  }
}
