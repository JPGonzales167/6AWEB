import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  cities = [
    {
      name: 'France',
      category: 'Architecture and Fine Arts',
      img: 'https://picsum.photos/id/1011/400/250',
      description: 'The largest country in Western Europe, has long been a gateway between the northern and southern regions.'
    },
    {
      name: 'Seoul',
      category: 'Humanities and Arts',
      img: 'https://picsum.photos/id/1015/400/250',
      description: 'Korean Soul (formerly Soul-Tokyo) – Special City of South Korea.'
    },
    {
      name: 'San Francisco',
      category: 'Science and Technology',
      img: 'https://picsum.photos/id/1016/400/250',
      description: 'A cultural and financial centre of the western United States and one of the country’s most cosmopolitan cities.'
    },
    {
      name: 'Boston',
      category: 'Engineering and Tech',
      img: 'https://picsum.photos/id/1012/400/250',
      description: 'Best known for its famous baked beans, Fenway Park, the Boston Marathon, and of course for the Bar from Cheers.'
    }
  ];

  subscriber = { name: '' };
}
