import {Component} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {Button} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import {HttpResponseData} from '../interface/http-response-data';
import {Router} from '@angular/router';
import {UserService} from '../api/user/user.service';
import {InputTextModule} from "primeng/inputtext";
import {KeyFilterModule} from "primeng/keyfilter";
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FooterComponent,
    Button,
    CardModule,
    DividerModule,
    InputTextModule,
    KeyFilterModule,
    CalendarModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nameValid: boolean = true;
  emailValid: boolean = true;
  passwordValid: boolean = true;
  isMotion = false;
  birthday: Date =new Date();
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private userService: UserService) {
    this.form = this.fb.group(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
      }
    )
  }

  name = '';
  email = '';
  password = '';

  // form = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required])
  // })

  nameChange = (e: Event) => {
    // @ts-ignore
    this.name = e.target.value
  }
  passwordChange = (e: Event) => {
    // @ts-ignore
    this.password = e.target.value
  }
  emailChange = (e: Event) => {
    // @ts-ignore
    this.email = e.target.value
  }

  register = () => {


    const registerData = {
      name: this.form?.get('name')?.value,
      email: this.form?.get('email')?.value,
      password: this.form?.get('password')?.value,
      birthday: this.birthday
    }


    const formArr = Object.entries(this.form?.controls)

    formArr.forEach((control: any) => {

      this.valid(control[1], control[0])
    })

    if (this.nameValid || this.emailValid || this.passwordValid) {

      this.userService.registerAPI(registerData).subscribe({
        next: (data: HttpResponseData) => {
          if (data.responseCode === 200) {
            Swal.fire({
              icon: "success",
              title: "註冊成功",
            }).then((result) => {
              if (result) {
                this.router.navigate(['/login']).then((result) => {
                }).catch((error) => {
                  Swal.fire({
                    icon: "error",
                    title: "路由不存在",
                  })
                });
              }
            })
          }

        }, error: () => {

        }
      })
    }

  }

  valid(attr: AbstractControl, attrName: string) {
    // 動態地設定 this 物件的屬性
    this[attrName + 'Valid' as 'nameValid' | 'emailValid' | 'passwordValid'] = !attr.invalid;
  }

  setFormValue(attr: FormControl, value: any) {
    attr.setValue(value)
  }

  onValideMail = (e: Event) => {
    const emailControl = this.form.get('email');
    if (emailControl instanceof FormControl) {
      this.setFormValue(emailControl, (e.target as HTMLInputElement).value);
    }

    if (this.form.get('email')?.errors) {
      this.emailValid = false;
    } else {
      this.emailValid = true;
    }

  }
  onValideName = (e: Event) => {
    // @ts-ignore
    this.form.get('name').setValue(e.target.value)
    // @ts-ignore
    console.log(this.form.get('email')?.invalid);
    // @ts-ignore

    if (this.form.get('name').errors) {
      this.nameValid = false;
    } else {
      this.nameValid = true;
    }
  }
  onValidePassword = (e: Event) => {
    // @ts-ignore
    this.form.get('password').setValue(e.target.value)
    // @ts-ignore
    if (this.form.get('password').errors) {
      this.passwordValid = false;
    } else {
      this.passwordValid = true;
    }
  }


}
