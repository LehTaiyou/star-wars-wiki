import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilms } from 'src/app/model/films';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  constructor(private router:ActivatedRoute, private starWarsService:StarWarsService){
    this.id=router.snapshot.params.id;
  }

  public id?:string
  public film?:IFilms
  public personagens:string[]=[]
  public planet:string[]=[]
  public specie:string[]=[]
  public vehicle:string[]=[]
  public starship:string[]=[]

  ngOnInit() {
    
    if (this.id){
      this.starWarsService.getFilms(this.id).subscribe((data)=>{
        this.film=data;
        this.converterPersonagem(this.film!.characters)
        this.converterPlaneta(this.film!.planets)
        this.converterEspécie(this.film!.species)
        this.converterVeículo(this.film!.vehicles)
        this.converterNaves(this.film!.starships)
        
      })
  }

  }
  converterPersonagem(characters:string[]){
    for (let i=0; i<characters.length; i++){
      this.starWarsService.get(characters[i]).subscribe((data)=>{
        this.personagens.push(data.name);
        
      }) 
    }
  }
  converterPlaneta(planets:string[]){
    for (let p=0; p<planets.length; p++){
      this.starWarsService.get(planets[p]).subscribe((data)=>{
        this.planet.push(data.name);       
      }) 
    }
  }
  converterEspécie(species:string[]){
    for (let p=0; p<species.length; p++){
      this.starWarsService.get(species[p]).subscribe((data)=>{
        this.specie.push(data.name);      
      }) 
    }
  }
  converterVeículo(vehicles:string[]){
    for (let p=0; p<vehicles.length; p++){
      this.starWarsService.get(vehicles[p]).subscribe((data)=>{
        this.vehicle.push(data.name);
      }) 
    }
  }
  converterNaves(starships:string[]){
    for (let p=0; p<starships.length; p++){
      this.starWarsService.get(starships[p]).subscribe((data)=>{
        this.starship.push(data.name);
      }) 
    }
  }


  }
