import { Component, OnInit } from '@angular/core';
import { HttpclientComponent } from './httpclient/httpclient';
import { HttpclientService } from './httpclient.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpclientComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'HTTP Client Demo';
  httpusers: User[] = [];

  constructor(private httpClientService: HttpclientService) {}

  ngOnInit() {
    this.httpClientService.getUsersRemotely().subscribe((data: User[]) => {
      this.httpusers = data;
    });
  }
}
