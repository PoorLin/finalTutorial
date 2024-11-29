import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {CommonComponent} from './common/common.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {profileResolver} from './profile/profile.resolver';

export const routes: Routes = [
  {
    path:'',
    component: CommonComponent,
    children :[
      {
        path:'home',
        component:HomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
        resolve:{profileData:profileResolver }
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  }
];
