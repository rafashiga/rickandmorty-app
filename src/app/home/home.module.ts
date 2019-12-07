import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeEpisodesComponent } from './home-episodes/home-episodes.component';
import { HomeCharactersComponent } from './home-characters/home-characters.component';
import { HomeCharactersCardComponent } from './home-characters/home-characters-card/home-characters-card.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeEpisodesComponent,
    HomeCharactersComponent,
    HomeCharactersCardComponent,
    HomeNavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
