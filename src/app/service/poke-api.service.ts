import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> { // Observable e opcional pois já vem enbutido
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemons: any) => { // esse map e do javascript e não do rxjs
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );
        });
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> { //Observable opcional
    return this.http.get<any>(url).pipe(
      map( // esse map e do rxjs
        (res) => res
      )
    );
  }
}
