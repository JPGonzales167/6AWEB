import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css',
})
export class CustomForm {  trailblazerForm!: FormGroup;
  // Game-related options
  paths = ['Destruction', 'Hunt', 'Harmony', 'Preservation', 'Nihility', 'Abundance', 'Erudition'];
  elements = ['Fire', 'Ice', 'Lightning', 'Wind', 'Quantum', 'Imaginary', 'Physical'];
  servers = ['America', 'Europe', 'Asia', 'TW/HK/MO'];
  characters = ['Dan Heng', 'March 7th', 'Himeko', 'Welt', 'Kafka', 'Blade', 'Jingliu', 'Acheron', 'Aventurine', 'Robin'];

  submitted = false;

  constructor(private fb: FormBuilder) {
    this.trailblazerForm = this.fb.group({
      // Section 1: Trailblazer Profile
      trailblazerName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      pathAffinity: ['', Validators.required],
      elementAlignment: ['', Validators.required],
      serverRegion: ['', Validators.required],

      // Section 2: Combat & Feedback
      favoriteCharacter: ['', Validators.required],
      teamRole: ['', Validators.required],
      feedback: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      joinCommunity: [false]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.trailblazerForm.invalid) {
      this.trailblazerForm.markAllAsTouched();
      return;
    }

    console.log('🚀 Trailblazer Registration:', this.trailblazerForm.value);
    alert('✨ Welcome aboard the Astral Express, Trailblazer!');
  }

  resetForm() {
    this.submitted = false;
    this.trailblazerForm.reset();
  }

  isInvalid(fieldName: string): boolean {
    const control = this.trailblazerForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitted));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.trailblazerForm.get(fieldName);
    if (!control || !control.errors) return '';    const errors = control.errors;

    if (errors['required']) return 'This field is required';
    if (errors['minlength']) return `Minimum ${errors['minlength'].requiredLength} characters required`;
    if (errors['maxlength']) return `Maximum ${errors['maxlength'].requiredLength} characters allowed`;
      return 'Invalid input';
  }
}
