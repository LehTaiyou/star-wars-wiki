import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISpecies } from 'src/app/model/species';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { IPlanets } from 'src/app/model/planets';


@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  pageNextUrl = ''
  pagePreviousUrl = ''
  length = 0;
  pageIndex = 0;

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  constructor(private router:ActivatedRoute, private starWarsService:StarWarsService){
  }
  public species:ISpecies[]=[]
  public species_names:string[]=[]

  public planets:IPlanets[]=[]
  public planets_names:string[]=[]


  ngOnInit(){
    
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
        this.species=data.results
        this.pageNextUrl=data.next
        this.pagePreviousUrl=data.previous
        console.log(data)
      })
      
    }
   else if((e.previousPageIndex || e.previousPageIndex==0) && e.previousPageIndex > e.pageIndex){
      this.starWarsService.getByEndPoint(this.pagePreviousUrl).subscribe((data) =>{
        this.species=data.results
        this.pageNextUrl=data.next
        this.pagePreviousUrl=data.previous
        console.log(data)
      
      })
      
    }
  }
}
