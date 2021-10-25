import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../Interfaces/pokemon-list.interface';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
  @Input()
  pokemonInput!: Pokemon;
  i: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getPokemonPhotoUrl(url: string): string {
    let splitArray = url.split("/");
    console.log(splitArray);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${splitArray[6]}.png`;
  }
}
