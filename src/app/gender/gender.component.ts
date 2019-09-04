import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  isUserLoggedIn: boolean;

  ngOnInit() {
    this.authService.getUserLoginStatus().subscribe(
      initialUserLoginStatus => this.isUserLoggedIn = initialUserLoginStatus);
  }
}
