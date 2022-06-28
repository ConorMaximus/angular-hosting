import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  rootPath: string = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  getPokemon(limit: number, offset: number) {
    if(offset != 0) return this.http.get(`${this.rootPath}pokemon?limit=${limit}&offset=${offset}`);
    else return this.http.get(`${this.rootPath}pokemon?limit=${limit}`);
  }

  /*getPokemon(limit: number, offset: number) {
    return this.http.get(`${this.rootPath}pokemon?limit=${limit}&offset=${offset}`);
  }*/

  getPokemonByUrl(url: string) {
    return this.http.get(`${url}`);
  }

  getPokemonByLimit(limit: number) {
    return this.http.get(`${this.rootPath}pokemon?limit=${limit}`);
  }

  getPokemonInformationByName(name: string) {
    return this.http.get(`${this.rootPath}pokemon/${name}`);
  }

}
