import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {Button} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';

@Component({
  selector: 'app-login-navbar',
  standalone: true,
  imports: [
    NgClass,
    Button,
    AvatarModule
  ],
  templateUrl: './login-navbar.component.html',
  styleUrl: './login-navbar.component.css'
})
export class LoginNavbarComponent {

}
