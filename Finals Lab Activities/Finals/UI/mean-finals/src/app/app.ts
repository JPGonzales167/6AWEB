import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  readonly title = 'crud_v19';
  readonly APIUrl = "http://localhost:5038/api/books/";
  readonly petalIndices = [1,2,3,4,5,6,7,8,9,10,11,12];
  readonly starIndices = [1, 2, 3, 4, 5];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  animes: any[] = [];
  isLoading = false;

  showAddForm = false;
  newTitle = '';
  newGenre = '';
  newEpisodes = '';
  newRating = 0;
  newHoverRating = 0;
  addSuccess = false;
  addError = false;

  showEditModal = false;
  editAnime: any = { id: '', title: '', desc: '', price: '', rating: 0 };
  editHoverRating = 0;

  showDeleteModal = false;
  deleteTargetId: any = null;
  deleteTargetTitle = '';

  showRateModal = false;
  rateTarget: any = null;
  rateValue = 0;
  rateHover = 0;
  rateSuccess = false;

  searchQuery = '';

  get filteredAnimes() {
    if (!this.searchQuery.trim()) return this.animes;
    const q = this.searchQuery.toLowerCase();
    return this.animes.filter(a =>
      a.title?.toLowerCase().includes(q) ||
      a.desc?.toLowerCase().includes(q)
    );
  }

  ngOnInit() { this.refreshAnimes(); }

  refreshAnimes() {
    this.isLoading = true;
    this.http.get(this.APIUrl + 'GetBooks').subscribe({
      next: (data) => { this.animes = data as any[]; this.isLoading = false; this.cdr.detectChanges(); },
      error: () => { this.isLoading = false; }
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (!this.showAddForm) this.resetAddForm();
  }

  resetAddForm() {
    this.newTitle = ''; this.newGenre = ''; this.newEpisodes = '';
    this.newRating = 0; this.newHoverRating = 0; this.addError = false;
  }

  addAnime() {
    if (!this.newTitle.trim()) { this.addError = true; return; }
    const formData = new FormData();
    formData.append("title", this.newTitle.trim());
    formData.append("description", this.newGenre.trim());
    formData.append("price", this.newEpisodes.toString());
    formData.append("rating", this.newRating.toString());
    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(() => {
      this.resetAddForm(); this.showAddForm = false; this.addSuccess = true;
      setTimeout(() => { this.addSuccess = false; this.cdr.detectChanges(); }, 3000);
      this.refreshAnimes();
    });
  }

  openEditModal(anime: any) {
    this.editAnime = { ...anime, rating: Number(anime.rating) || 0 };
    this.editHoverRating = 0; this.showEditModal = true;
  }
  closeEditModal() { this.showEditModal = false; this.editHoverRating = 0; }

  saveAnime() {
    const body = { title: this.editAnime.title, description: this.editAnime.desc, price: this.editAnime.price, rating: this.editAnime.rating };
    this.http.put(this.APIUrl + 'UpdateBook?id=' + this.editAnime.id, body).subscribe(() => {
      this.showEditModal = false; this.refreshAnimes();
    });
  }

  openRateModal(anime: any) {
    this.rateTarget = anime; this.rateValue = Number(anime.rating) || 0;
    this.rateHover = 0; this.showRateModal = true;
  }
  closeRateModal() { this.showRateModal = false; this.rateTarget = null; this.rateHover = 0; }

  submitRating() {
    if (!this.rateTarget || this.rateValue === 0) return;
    const body = { title: this.rateTarget.title, description: this.rateTarget.desc, price: this.rateTarget.price, rating: this.rateValue };
    this.http.put(this.APIUrl + 'UpdateBook?id=' + this.rateTarget.id, body).subscribe(() => {
      this.showRateModal = false; this.rateTarget = null; this.rateSuccess = true;
      setTimeout(() => { this.rateSuccess = false; this.cdr.detectChanges(); }, 3000);
      this.refreshAnimes();
    });
  }

  getStarClass(starIndex: number, currentRating: number, hoverRating: number): string {
    const active = hoverRating > 0 ? hoverRating : currentRating;
    return starIndex <= active ? 'star filled' : 'star empty';
  }

  getRatingLabel(rating: number): string {
    const labels: Record<number, string> = { 1: 'Disappointing', 2: 'It was okay', 3: 'Pretty good', 4: 'Really great', 5: 'Masterpiece!' };
    return labels[rating] ?? 'Tap a star to rate';
  }

  confirmDelete(id: any, title: string) {
    this.deleteTargetId = id; this.deleteTargetTitle = title; this.showDeleteModal = true;
  }
  cancelDelete() { this.showDeleteModal = false; this.deleteTargetId = null; this.deleteTargetTitle = ''; }

  deleteAnime() {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + this.deleteTargetId).subscribe(() => {
      this.showDeleteModal = false; this.deleteTargetId = null; this.refreshAnimes();
    });
  }
}
