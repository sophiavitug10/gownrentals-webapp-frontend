import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: false
})
export class HomepageComponent implements OnInit {

  public currentSlide = 0;

  public carouselItems = [
    { src: 'assets/images/gown5.jpg', name: 'Gown 1' },
    { src: 'assets/images/gown4.jpg', name: 'Gown 2' },
    { src: 'assets/images/gown3.jpg', name: 'Gown 3' }
  ];

  ngOnInit(): void {
    // Auto-slide every 5 seconds
    setInterval(() => this.nextSlide(), 5000);
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
  }
}