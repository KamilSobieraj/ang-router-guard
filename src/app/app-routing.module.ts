import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PlayersComponent} from './players/players.component';
import {RankingComponent} from './ranking/ranking.component';
import {GenderComponent} from './gender/gender.component';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: 'players', component: PlayersComponent, children: [
    {path: 'gender', component: GenderComponent, canActivate: [AuthGuard]}
    ]},
  {path: 'ranking', component: RankingComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'players', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
