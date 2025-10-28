import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-body',
  standalone: true, // ✅ Required for Angular 20+
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public currentSlide = 0;

  // ✅ Carousel images
  public carouselItems = [
    { image: 'assets/images/gown5.jpg', title: 'Gown 1' },
    { image: 'assets/images/gown4.jpg', title: 'Gown 2' },
    { image: 'assets/images/gown1.jpg', title: 'Gown 3' }
  ];

  // ✅ Summary cards for "Why Choose Us?" section
  public summaryCards = [
    {
      image: 'assets/images/quality.jpg',
      title: 'Premium Quality',
      text: 'Each gown is crafted with exquisite fabrics and flawless tailoring for a luxurious fit and feel.'
    },
    {
      image: 'assets/images/service.jpg',
      title: 'Exceptional Service',
      text: 'Our team ensures every client feels confident and stunning — from fitting to final walk.'
    },
    {
      image: 'assets/images/style.jpg',
      title: 'Timeless Style',
      text: 'Choose from our wide collection — from elegant classics to modern statement gowns.'
    }
  ];

  ngOnInit(): void {
    // Auto-slide every 5 seconds
    setInterval(() => this.nextSlide(), 5000);
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  nextSlide(): void {
    this.currentSlide =
      (this.currentSlide + 1) % this.carouselItems.length;
  }
}
