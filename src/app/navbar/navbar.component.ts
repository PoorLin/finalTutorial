import { Component } from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {InputTextModule} from "primeng/inputtext";
import {MenubarModule} from "primeng/menubar";
import {CommonModule, NgIf} from "@angular/common";
import {MenuItem, MenuItemCommandEvent, PrimeTemplate} from "primeng/api";
import {Ripple, RippleModule} from "primeng/ripple";
import {Router} from '@angular/router';
import {Button} from 'primeng/button';
import {CookieService} from 'ngx-cookie-service';
import {TieredMenuModule} from 'primeng/tieredmenu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AvatarModule,
    BadgeModule,
    InputTextModule,
    MenubarModule,
    NgIf,
    PrimeTemplate,
    Ripple,
    MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, Button, TieredMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  items: MenuItem[] | undefined;
  useritems: MenuItem[] | undefined;

  isLogin = false;

  constructor(private router: Router,private cookieService: CookieService) {
    const token=cookieService.get('token');
    token ? this.isLogin = true : false;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command:()=> {
          this.router.navigate(['/home']);
        }
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U'
          },
          {
            separator: true
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                badge: '2'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                badge: '3'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3'
      }
    ];
    this.useritems = [
      {
        label: '個人資料',
        icon: 'pi pi-file',
        command:()=>{
          this.router.navigate(['/profile']);
        }
      },
      {
        label: '登出',
        icon: 'pi pi-file-edit',
        command:()=>{
          this.logout();
          this.router.navigate(['/login']);
        }
      }
    ]

  }
  redToLogin = ()=>{
    this.router.navigate(['/login']);
  }
  logout = ()=>{
    this.cookieService.delete('token');
    this.cookieService.delete('user');
    this.router.navigate(['/login']);
  }
}
