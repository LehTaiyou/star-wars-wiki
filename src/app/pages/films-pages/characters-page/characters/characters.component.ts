import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ICharacters } from 'src/app/model/characters';
import { IPlanets } from 'src/app/model/planets';
import { ISpecies } from 'src/app/model/species';
import { StarWarsService } from 'src/app/services/star-wars.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  pageNextUrl = ''
  pagePreviousUrl = ''
  length = 0;
  pageIndex = 0;
  

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  constructor(private router:ActivatedRoute, private starWarsService:StarWarsService) {
  }
  public personagens:ICharacters[]=[]
  public personagens_names:string[]=[]

  public species:ISpecies[]=[]
  public species_names:string[]=[]

  public planets:IPlanets[]=[]
  public planets_names:string[]=[]

  ngOnInit(){
    
    this.starWarsService.getCharacters().subscribe((data)=>{
    this.personagens=data.results
    this.length=data.count
    this.pageNextUrl=data.next
    console.log(data);
  })
    this.starWarsService.getSpecies().subscribe((data)=>{
    this.species=data.results
    this.length=data.count
    this.pageNextUrl=data.next
    console.log(data);
  })
    this.starWarsService.getPlanets().subscribe((data)=>{
    this.planets=data.results
    this.length=data.count
    this.pageNextUrl=data.next
    console.log(data);
  })
  
  } 

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageIndex = e.pageIndex;
    console.log(e);
    if((e.previousPageIndex || e.previousPageIndex==0) && e.previousPageIndex < e.pageIndex){
      this.starWarsService.getByEndPoint(this.pageNextUrl).subscribe((data) =>{
        this.personagens=data.results
        this.pageNextUrl=data.next
        this.pagePreviousUrl=data.previous
        console.log(data)
      })
      
    }
   else if((e.previousPageIndex || e.previousPageIndex==0) && e.previousPageIndex > e.pageIndex){
      this.starWarsService.getByEndPoint(this.pagePreviousUrl).subscribe((data) =>{
        this.personagens=data.results
        this.pageNextUrl=data.next
        this.pagePreviousUrl=data.previous
        console.log(data)
      
      })
      
    }
  }
}
