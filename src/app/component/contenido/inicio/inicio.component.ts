import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  imagevalores: string = 'assets/images/bk-aboutUs.jpg';
  imagePath: string = 'assets/images/Banner-1.png';
  imagePathbanner: string = 'assets/images/Banner-2.png';
  imagePathbanner3: string = 'assets/images/Banner-3.png';
  video: string = 'assets/images/Social-Media.gif';


}
