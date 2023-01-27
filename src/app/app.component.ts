import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOpened = false;

  title: any;

    setMenuState( state: boolean){
    this.menuOpened = state;
  }
  closeMenu(){
    this.menuOpened = false;
  }
  
}
