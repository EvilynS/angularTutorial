import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { from } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id:1 ,
    name: 'Super Man'
  };
  constructor() { }

  ngOnInit() {
  }

}
