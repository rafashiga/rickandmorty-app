import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';


const rickQuery = gql`
  query rickQuery {
    episodes {
      results {
        name
        episode
      }
    }
    characters {
      results {
        name
        status
        species
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  episodes: any;
  characters: any;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit() {

    this.querySubscription = this.apollo.watchQuery<any>({
      query: rickQuery
    }).valueChanges
      .subscribe(({ data }) => {
        this.episodes = data.episodes;
        this.characters = data.characters;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
