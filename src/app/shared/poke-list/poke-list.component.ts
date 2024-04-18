import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})

export class PokeListComponent implements OnInit {
  
  private setAllPokemons: any;
  public getAllPokemons: any;


  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void { // Navegar pela Url (verificar com console.log)
    this.pokeApiService.apiListAllPokemons.subscribe((res) => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
      //console.log(this.getAllPokemons);
    });
  }

  public getSearch(value: string) {
    //console.log(value);
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
