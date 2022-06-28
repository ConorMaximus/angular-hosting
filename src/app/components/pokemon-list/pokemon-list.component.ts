import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDialogComponent } from '../pokemon-dialog/pokemon-dialog.component';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  
  pokemon: Pokemon[] = [];
  nextString: string = '';
  previousString: string = '';
  limit: number = 12;

  // Pagination
  page = 1;
  totalPokemon: number = 0;

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // this.getPokemonViaUrl('https://pokeapi.co/api/v2/pokemon?limit=' + this.limit);
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonService.getPokemon(this.limit, this.limit * (this.page - 1))
    .subscribe((response: any) => {
      this.totalPokemon = response.count;
      this.nextString = response.next;
      this.previousString = response.previous;
      response.results.map((result: any) =>{
          this.getPokemonInformationByName(result.name);
      });
    });
  }

  getPokemonInformationByName(name: string): void {
    this.pokemonService.getPokemonInformationByName(name)
    .subscribe((uniqueResponse: any) => {
      this.pokemon.push(uniqueResponse);
      this.sortPokemon();
    });
  }

  sortPokemon() {
    this.pokemon.sort(function(a, b){return a.id-b.id});
  }

  openDialog(pokemon: Pokemon) {
    let dialogRef = this.dialog.open(PokemonDialogComponent, {
      width: '400px',
      data: { pokemon: pokemon },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

/*getPokemonViaUrl(url: string): void {
    this.pokemon = [];
    this.pokemonService.getPokemonByUrl(url)
    .subscribe((response: any) => {
      this.nextString = response.next;
      this.previousString = response.previous;
      response.results.map((result: any) =>{
        this.getPokemonInformationByName(result.name);
      });
    });
  }

  goToNext() {
    this.getPokemonViaUrl(this.nextString);
  }

  goToPrevious() {
    this.getPokemonViaUrl(this.previousString);
  }*/

}