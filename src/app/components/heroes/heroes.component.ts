import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(private _heoresService:HeroesService,
              private router:Router
              ) { }
  //se ejecuta cuando la pagina ya esta cargada
  ngOnInit() {
    this.heroes = this._heoresService.getHeroes();

    //console.log(this.heroes);
  }

  verHeroe(idx: number){
    this.router.navigate(['/heroe',idx]);
  }

}
