import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/films-pages/characters-page/characters/characters.component';
import { FilmsComponent } from './pages/films-pages/films/films.component';
import { PlanetsComponent } from './pages/films-pages/planets-page/planets/planets.component';
import { SpeciesComponent } from './pages/films-pages/species-page/species/species.component';
import { StarshipsComponent } from './pages/films-pages/starships-page/starships/starships.component';
import { VehiclesComponent } from './pages/films-pages/vehicles-page/vehicles/vehicles.component';
import { ListTitlesComponent } from './shared/list-titles/list-titles.component';

const routes: Routes = [
  {path:'films/:id', component:FilmsComponent},
  {path:'films', component:ListTitlesComponent},
  {path:'planets', component:PlanetsComponent},
  {path:'species', component:SpeciesComponent},
  {path:'vehicles', component:VehiclesComponent},
  {path:'characters', component:CharactersComponent},
  {path:'starships', component:StarshipsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
