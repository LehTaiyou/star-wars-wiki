import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})
export class ListTitlesComponent implements OnInit {

  

  public listTitles: any = [{
    cover: 'assets/imagens-site/YXz2MNL.png',
    name: 'Star Wars A Ameaça Fantasma',
    id: '4'
  }, {
    cover: 'assets/imagens-site/zr9T3pw.png',
    name: 'Star Wars O Ataque Dos Clones',
    id: '5'
  }, {
    cover: 'assets/imagens-site/iNjrG5e.png',
    name: 'Star Wars A Vingança Dos Sith',
    id: '6'
  }, {
    cover: 'assets/imagens-site/UMCoYCD.png',
    name: 'Star Wars Uma Nova Esperança',
    id: '1'
  }, {
    cover: 'assets/imagens-site/OvdONk6.png',
    name: 'Star Wars O Império Contra-Ataca',
    id: '2'
  }, {
    cover: 'assets/imagens-site/6RiGji4.png',
    name: 'Star Wars O Retorno De Jedi',
    id: '3'
    }];

constructor() { }

ngOnInit() {}
}
