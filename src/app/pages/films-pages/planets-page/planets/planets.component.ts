import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { IPlanets } from 'src/app/model/planets';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})

  export class PlanetsComponent implements OnInit {
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
    public planets:IPlanets[]=[]
    public planets_names:string[]=[]
    

    ngOnInit() {

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
        this.planets=data.results
        this.pageNextUrl=data.next
        this.pagePreviousUrl=data.previous
        console.log(data)
      })
      
    }
   else if((e.previousPageIndex || e.previousPageIndex==0) && e.previousPageIndex > e.pageIndex){
      this.starWarsService.getByEndPoint(this.pagePreviousUrl).subscribe((data) =>{
        this.planets=data.results
        this.pageNextUrl=data.next
        this.pagePreviousUrl=data.previous
        console.log(data)
      
      })
      
    }
  }
  }