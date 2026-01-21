import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';

@Component({
  selector: 'app-httpclient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './httpclient.html',
  styleUrl: './httpclient.css',
})
export class HttpclientComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: User[]) => {
        this.users = data;
      });
  }
}
