import { PokemonSprites } from "./pokemon-sprites";
import { PokemonStat } from "./pokemon-stat";
import { PokemonType } from "./pokemon-type";

export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    stats: PokemonStat[];
    sprites: PokemonSprites;
  }