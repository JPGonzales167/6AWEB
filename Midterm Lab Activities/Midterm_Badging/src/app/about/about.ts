import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit, OnDestroy {
  currentDateTime = new Date();
  private timeSubscription?: Subscription;

  portalInfo = {
    name: 'Community Hub Portal',
    version: '1.0.0',
    framework: 'Angular 18',
    description: 'A demonstration of Angular routing, services, pipes, and observables',
    features: [
      'Lazy-loaded routes for optimal performance',
      'Shared services with Observable data streams',
      'Custom and built-in pipe implementations',
      'Reactive form handling with validation',
      'Search and filter functionality',
      'Professional UI with responsive design'
    ]
  };

  ngOnInit() {
    // Update time every second
    this.timeSubscription = interval(1000).subscribe(() => {
      this.currentDateTime = new Date();
    });
  }

  ngOnDestroy() {
    // Clean up subscription when component is destroyed
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
}
