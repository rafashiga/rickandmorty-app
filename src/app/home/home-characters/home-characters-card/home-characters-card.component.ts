import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-characters-card',
  templateUrl: './home-characters-card.component.html',
  styleUrls: ['./home-characters-card.component.scss']
})
export class HomeCharactersCardComponent implements OnInit {

  @Input() character;

  constructor() { }

  ngOnInit() {
  }

}
