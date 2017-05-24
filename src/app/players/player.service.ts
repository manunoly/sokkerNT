import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Player } from './player';

@Injectable()
export class PlayerService {
  private country: string;

  players: FirebaseListObservable<Player[]>;
 
  constructor(private db: AngularFireDatabase, private authS: AuthService) {
    this.country = 'cuba';
   }

  getPlayers() {
    this.players = this.db.list('/cuba/players');
    return this.players;
  }

  savePlayer(player: Player) {
    if (this.authS.isAuthenticated())
      return this.db.object('/'+this.country+'/players').update({ [player['pid']]: player });
  }

  archivePlayer(player: Player) {
    console.log('archivePlayerFunction');
  }
}
