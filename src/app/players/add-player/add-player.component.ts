import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  @ViewChild('f') playerForm: NgForm;
  player: Player = Object.create(null);
  items: any;
  /*player =
  {
    pid: 11,
    name: 'Player Name',
    age: -1,
    stamina: -1,
    pace: -1,
    technique: -1,
    passing: -1,
    keeper: -1,
    defender: -1,
    playmaker: -1,
    striker: -1,
    workTeam: -1,
    experience: -1,
    value: -1,
    form: -1,
    wage: -1,
    height: -1,
    weight: -1,
    bmi: -1,
    status: 'R'
  };*/
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getSokkerPlayer();

  }

  savePlayer() {
    this.playerService.savePlayer(this.player).then(() => {
      this.playerForm.reset();
    }).catch((data: Object) => {
      console.log(JSON.stringify(data));
      console.log("Something went wrong please try again");
    });
  }
}
