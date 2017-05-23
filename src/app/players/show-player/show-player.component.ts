import { Component, Input, OnInit } from '@angular/core';

import { Player } from '../player';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.css']
})
export class ShowPlayerComponent implements OnInit {
  // @Input() player: Player;
  player =
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
  };
  constructor() { }

  ngOnInit() {
  }

}
