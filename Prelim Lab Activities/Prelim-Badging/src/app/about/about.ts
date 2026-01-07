import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  onLearnMore() {
    alert('Thanks for your interest — more information will be available soon.');
  }

  onGetGift() {
    alert('Gift claim: A confirmation email will be sent to registered attendees.');
  }
}
