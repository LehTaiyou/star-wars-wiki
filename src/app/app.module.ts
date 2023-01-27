import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ListTitlesComponent } from './shared/list-titles/list-titles.component';
import { FullBannerComponent } from './shared/full-banner/full-banner.component';
import { TitleComponent } from './shared/title/title.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http'
import { StarWarsService } from './services/star-wars.service';
import { FilmsComponent } from './pages/films-pages/films/films.component';
import { CharactersComponent } from './pages/films-pages/characters-page/characters/characters.component';
import { PlanetsComponent } from './pages/films-pages/planets-page/planets/planets.component';
import { SpeciesComponent } from './pages/films-pages/species-page/species/species.component';
import { VehiclesComponent } from './pages/films-pages/vehicles-page/vehicles/vehicles.component';
import { StarshipsComponent } from './pages/films-pages/starships-page/starships/starships.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListTitlesComponent,
    FullBannerComponent,
    TitleComponent,
    FooterComponent,
    FilmsComponent,
    CharactersComponent,
    PlanetsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
