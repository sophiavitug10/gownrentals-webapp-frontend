import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menus = [
    { name: 'Home', routerPath: '' },
    { name: 'Browse Gowns', routerPath: 'gown-catalog' },
    { name: 'About', routerPath: 'about' },
    { name: 'Contact', routerPath: 'contact' },
    { name: 'Login/Signup', routerPath: 'login' }
  ];
}
