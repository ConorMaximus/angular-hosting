import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.scss']
})
export class PokemonDialogComponent implements OnInit {

  pokemon!: Pokemon;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {pokemon: Pokemon}) { }
  
  ngOnInit(): void {
    this.pokemon = this.data.pokemon;
  }

}
