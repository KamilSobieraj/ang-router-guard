import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isUserLoggedIn: boolean;

  ngOnInit() {
  }

  checkUserStatus() {
    this.authService.getUserLoginStatus().subscribe(userLoginStatus => this.isUserLoggedIn = userLoginStatus);
  }
}
