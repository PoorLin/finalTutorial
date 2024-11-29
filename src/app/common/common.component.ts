import { Component } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.css'
})
export class CommonComponent {

}
