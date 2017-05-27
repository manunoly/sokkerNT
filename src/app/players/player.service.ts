import { Injectable } from '@angular/core';
import { JsonpModule, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { } from 'rxjs/Operator';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../auth.service';
import { Player } from './player';

@Injectable()
export class PlayerService {
  private country: string;

  players: FirebaseListObservable<Player[]>;

  constructor(private db: AngularFireDatabase, private authS: AuthService, private jsonp: Jsonp) {
    this.country = 'cuba';
  }

  getPlayers() {
    this.players = this.db.list('/' + this.country + '/players');
    return this.players;
  }

  savePlayer(player: Player) {
    if (this.authS.isAuthenticated())
      return this.db.object('/' + this.country + '/players').update({ [player['pid']]: player });
  }

  archivePlayer(player: Player) {
    console.log('archivePlayerFunction');
  }

  getSokkerPlayer() {
    console.log('llamando');
/*    this.jsonp.request('http://online.sokker.org/player/PID/34519651&callback=JSONP_CALLBACK').map(
        (res) => res.json()
        ).subscribe(
        (data) => console.log(data)
    );*/
        return this.jsonp.request('http://online.sokker.org/player/PID/34519651&callback=JSONP_CALLBACK')
        .map((res) => console.log(res.json()));
  }
}
