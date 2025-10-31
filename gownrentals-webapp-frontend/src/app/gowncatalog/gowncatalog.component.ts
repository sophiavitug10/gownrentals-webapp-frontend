import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gowncatalog',
  templateUrl: './gowncatalog.component.html',
  styleUrls: ['./gowncatalog.component.css']
})
export class GownCatalogComponent {
  searchTerm = '';
  selectedCategory = '';
  categories = ['Evening', 'Bridal', 'Cocktail', 'Debut', 'Formal'];

  gowns = [
    { name: 'Midnight Elegance', category: 'Evening', price: 2500, image: 'assets/gowns/evening1.jpg' },
    { name: 'Rose Whisper', category: 'Bridal', price: 4000, image: 'assets/gowns/bridal1.jpg' },
    { name: 'Pearl Dream', category: 'Debut', price: 2800, image: 'assets/gowns/debut1.jpg' },
  ];

  constructor(private router: Router) {}

  filteredGowns() {
    return this.gowns.filter(g =>
      g.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory ? g.category === this.selectedCategory : true)
    );
  }

  viewDetails(gown: any) {
    this.router.navigate(['/gown-details', gown.name]);
  }
}
