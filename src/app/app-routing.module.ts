import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './home/home.component'
import { PlayersComponent } from './players/players.component';
import { ListPlayersComponent } from './players/list-players/list-players.component';
import { AddPlayerComponent } from './players/add-player/add-player.component';
import { ShowPlayerComponent } from './players/show-player/show-player.component';
import { ImportPlayersComponent } from './players/import-players/import-players.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'players', component: PlayersComponent,
    children: [
      { path: 'list-players', component: ListPlayersComponent/*, canActivate: [AuthGuard]*/ },
      { path: '*', redirectTo: 'list-players' },
      { path: 'add', component: AddPlayerComponent/*, loadChildren: () => AddPlayerComponent*/ },
      { path: 'import-players', component: ImportPlayersComponent },
      { path: ':id', component: ShowPlayerComponent },
      { path: ':id/edit', component: AddPlayerComponent },

    ]
  },
  {
    path: 'login', component: LoginComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'sign-in', component: LoginComponent },
    ]
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  //add # to the route. imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }