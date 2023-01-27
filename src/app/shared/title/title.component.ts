import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
@Input() title: any;

constructor(private starWarsService:StarWarsService, private router:Router) {

}

ngOnInit() {

}
 public async getFilms (id:string){
        this.router.navigateByUrl(`films/${id}`)
        
    }
}
