import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join {
  model = {
    firstname: '',
    lastname: '',
    email: '',
    institution: ''
  };

  onSubmit() {
    alert('Thanks for joining, ' + (this.model.firstname || 'Friend') + '!');
  }
}
