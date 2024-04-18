import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { Observable, tap } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons():Observable<any> { // Observable é opcional pois já vem enbutido
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap( res => {
        console.log(res)
      })
    )
  }
}