import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { IVehicles } from 'src/app/model/vehicles';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
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
  public vehicles:IVehicles[]=[]
  public vehicles_names:string[]=[]

  ngOnInit(){
    
      this.starWarsService.getVehicles().subscribe((data)=>{
        this.vehicles=data.results
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
        this.vehicles=data.results
        this.pageNextUrl=data.next
        this.pagePreviousUrl=data.previous
        console.log(data)
      })
      
    }
   else if((e.previousPageIndex || e.previousPageIndex==0) && e.previousPageIndex > e.pageIndex){
      this.starWarsService.getByEndPoint(this.pagePreviousUrl).subscribe((data) =>{
        this.vehicles=data.results
        this.pageNextUrl=data.next
        this.pagePreviousUrl=data.previous
        console.log(data)
      
      })
      
    }
  }
}
