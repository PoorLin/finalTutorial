import {Component, Input} from '@angular/core';
import {CardModule} from 'primeng/card';
import {Button} from 'primeng/button';
import {FooterComponent} from '../footer/footer.component';
import {DividerModule} from 'primeng/divider';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../api/user/user.service';
import {HttpResponseData} from '../interface/http-response-data';
import {CookieService} from 'ngx-cookie-service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    Button,
    FooterComponent,
    DividerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router,private userService:UserService,private cookieService: CookieService) {
  }

  password = '';
  email = '';

  passwordChange = (e:Event)=>{
    if(e.target instanceof HTMLInputElement){
      this.password = e.target.value;
    }

  }

  emailChange = (e:Event)=>{
    if(e.target instanceof HTMLInputElement){
      this.email = e.target.value;
    }
  }

  login(){
    const loginData ={
      email: this.email,
      password: this.password,
    }

    this.userService.loginAPI(loginData).subscribe(
      {
        next: (data: HttpResponseData) => {
          console.log(data.responseCode);
          if(data.responseCode === 200){
            this.cookieService.set('token',data.responseData.token,{expires:1})
            this.cookieService.set('userId',data.responseData.userId,{expires:1})
            Swal.fire({
              icon: "success",
              title: "登入成功",
            }).then((result) => {
              this.router.navigate(['/']);
            })

          }
        }
      }
    )
  }


}
