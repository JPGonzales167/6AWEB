import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private cachedPosts$: Observable<Post[]> | null = null;

  constructor(private http: HttpClient) {}

  /**
   * Fetches posts from JSONPlaceholder API
   * Cached to avoid multiple API calls
   * Limited to 20 posts for performance
   */
  getPosts(): Observable<Post[]> {
    if (!this.cachedPosts$) {
      this.cachedPosts$ = this.http.get<Post[]>(this.apiUrl).pipe(
        map(posts => posts.slice(0, 20)), // Limit to 20 posts for faster loading
        tap(posts => console.log('Posts fetched and cached:', posts.length)),
        shareReplay(1) // Cache the result
      );
    }
    return this.cachedPosts$;
  }
}
