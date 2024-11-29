import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from './child/child.component';
import {Element} from '@angular/compiler';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {CommonComponent} from './common/common.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, NavbarComponent, FooterComponent, LoginComponent, CommonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial';
  name = '';
  email = '';

  nameChange = (e:Event)=>{
    // @ts-ignore
    this.name = e.target.value
  }

  emailChange = (e:Event)=>{
    // @ts-ignore
    this.email = e.target.value
  }

  change = (thisstr:string) =>{
  this.name += thisstr;
  }

}
