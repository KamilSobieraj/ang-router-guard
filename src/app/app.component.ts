import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {  }

  isUserLoggedIn: boolean;

  ngOnInit() {
    this.authService.getUserLoginStatus().subscribe(
      initialUserLoginStatus => this.isUserLoggedIn = initialUserLoginStatus);
  }
  updateUserLoginStatus() {
    this.authService.updateUserLoginStatus();
  }
}
