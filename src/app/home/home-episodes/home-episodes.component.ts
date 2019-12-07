import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-episodes',
  templateUrl: './home-episodes.component.html',
  styleUrls: ['./home-episodes.component.scss']
})
export class HomeEpisodesComponent implements OnInit {

  @Input() episodes;

  constructor() { }

  ngOnInit() {
  }


}
