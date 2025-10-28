import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  carouselItems = [
    { src: 'assets/images/gown1.jpg', name: 'Elegant Blue Gown' },
    { src: 'assets/images/gown4.jpg', name: 'Classic Pink Gown' },
    { src: 'assets/images/gown5.jpg', name: 'Royal Pink Gown' }
  ];
  private slideInterval: any;

  get totalSlides() {
    return this.carouselItems.length;
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.resetAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    }, 4000);
  }

  resetAutoSlide() {
    clearInterval(this.slideInterval);
    this.startAutoSlide();
  }
}