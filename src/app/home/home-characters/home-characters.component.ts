import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-characters',
  templateUrl: './home-characters.component.html',
  styleUrls: ['./home-characters.component.scss']
})
export class HomeCharactersComponent implements OnInit {

  @Input() characters;

  constructor() { }

  ngOnInit() {
  }

}
