import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imagePath = 'assets/images/logo_png.png';
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
