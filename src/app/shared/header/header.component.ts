import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu= {
    logo:'https://cdn2.iconfinder.com/data/icons/nattu-fitness/512/Exercise-64.png',
    itens:[
      {icone:'https://cdn2.iconfinder.com/data/icons/purple-world/512/Artboard_2-64.png',texto:'Inicio'},
      {icone:'https://cdn4.iconfinder.com/data/icons/fitness-and-sport-8/256/Training_management-64.png',texto:'Sobre'},
      {icone:'https://cdn2.iconfinder.com/data/icons/purple-world/512/Artboard_70-64.png',texto:'Galeria'},
      {icone:'https://cdn4.iconfinder.com/data/icons/education-and-learning-35/256/Questions-64.png',texto:'Contato'}
    ]
  }

  constructor() { }

  ngOnInit() {}

}
