import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { StarWarsService } from "src/app/services/star-wars.service";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();
    @Input() opened= false;

    constructor(private starWarsService: StarWarsService) {
        
    }
    ngOnInit(): void { 
    }
    toggle() {
        this.opened = !this.opened;
        this.menuToggle.emit(this.opened);
        console.log(this.toggle())
    }
   
}
