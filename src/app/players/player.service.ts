import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Player } from './player';

@Injectable()
export class PlayerService {

  players: FirebaseListObservable<Player[]>;
 
  constructor(private db: AngularFireDatabase) { }

  getPlayers() {
    this.players = this.db.list('/cuba/players');
    return this.players;
  }

  savePlayer(player: Player) {
    console.log
    return this.db.object('/cuba/players').update({ [player['pid']]: player });
  }

  addStaft() {
    console.log(this.db.object('/cuba/staff'));
    this.db.object('/cuba/staff').update({NT: 'manunoly@gmail.com'});
    this.db.object('/cuba/staff/members').set(['workprofessional1980@gmail.com','staff@gmail.com','staff1@gmail.com',]);
  }

  archivePlayer(player: Player) {
    console.log(player);
  }
}
