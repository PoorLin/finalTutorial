import { Component } from '@angular/core';
import {UserService} from '../api/user/user.service';
import {ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import {CalendarModule} from 'primeng/calendar';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, InputTextModule, KeyFilterModule, CalendarModule,DatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute) {}
  profileData :any;
  date: Date | undefined;
  ngOnInit() {

    this.profileData=this.route.snapshot.data['profileData'].responseData;
      console.log(this.profileData);
  }

}
