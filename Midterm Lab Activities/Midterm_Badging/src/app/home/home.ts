import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Post } from '../data.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Get posts and take first 5 using RxJS map operator
    this.posts$ = this.dataService.getPosts().pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}
