import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  imagePath: string = 'assets/images/logo_png.png';
    imagePathSena: string = 'assets/images/Sena_Emprende.png';
    imageFadepec: string = 'assets/images/Fadepec_Logo.png';
    imageUnad: string = 'assets/images/UnadLogo.png';

}
