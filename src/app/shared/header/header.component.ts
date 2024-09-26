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
      {icone:'https://cdn1.iconfinder.com/data/icons/resume-pictograms/100/Resume_Home-64.png',texto:'Inicio'},
      {icone:'https://cdn1.iconfinder.com/data/icons/hobbies-outline-1/340/hand_training_fitness_exercise_healthy_dumbbell_lifestyle_gym_health-64.png',texto:'Sobre'},
      {icone:'https://cdn2.iconfinder.com/data/icons/kitchen-appliances-computers-and-electronics/32/Appliances-30-64.png',texto:'Galeria'},
      {icone:'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/help-questionmark-64.png',texto:'Contato'}
    ]
  }

  constructor() { }

  ngOnInit() {}

}
