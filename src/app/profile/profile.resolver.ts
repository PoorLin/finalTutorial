import {ResolveFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {UserService} from '../api/user/user.service';


export const profileResolver: ResolveFn<boolean> = (route, state) => {
  const cookieService: CookieService = inject(CookieService);
  const userService:UserService = inject(UserService);
  const router:Router = inject(Router);
  const userId = cookieService.get('userId');
  console.log(123)
  if(userId){
    return userService.profileAPI(Number.parseInt(userId));
  }else {
    return router.navigate(['/login']);
  }
};
