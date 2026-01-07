import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './partners.html',
  styleUrls: ['./partners.css'], // ✅ corrected from styleUrl to styleUrls
})
export class Partners {
  partners = [
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      level: 'Platinum',
      website: 'https://microsoft.com'
    },
    {
      name: 'Apple, Inc.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      level: 'Gold',
      website: 'https://apple.com'
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg',
      level: 'Silver',
      website: 'https://amazon.com'
    },
    {
      name: 'Google, Inc.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      level: 'Bronze',
      website: 'https://google.com'
    }
  ];
}
