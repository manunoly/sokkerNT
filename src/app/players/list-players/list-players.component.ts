import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

import { AuthService } from '../../auth.service';

import { Player } from '../player';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  // players: FirebaseListObservable<any[]>;
  playersList: FirebaseListObservable<Player[]>;
  authenticate: boolean = false;
  
  constructor(private playerService: PlayerService, private authS: AuthService) { }

  ngOnInit() {
    this.playersList = this.playerService.getPlayers();
  }
  isAuthenticated(){
    console.log(this.authS.isAuthenticated());
    return this.authS.isAuthenticated();
  }

  addStaff(){
    this.playerService.addStaft();
  }
}
