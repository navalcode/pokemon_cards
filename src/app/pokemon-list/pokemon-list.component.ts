import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonListResponse } from '../Interfaces/pokemon-list.interface';
import { PokemonService } from '../Services/pokemon-service.service';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] | undefined;
  pokemonNumberSelected = '50';


  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons(50);
  }

  getPokemons(pokemonLimit: number) {
    this.pokemonService.getPokemonList(pokemonLimit).subscribe( resultado => {
      this.pokemonList = resultado.results;
      console.log(resultado);
    });
  }

  showPokemon(nombre: String){
    alert('Has seleccionado: '+nombre);
  }

  getPokemonList() {
    this.pokemonService.getPokemonList(parseInt(this.pokemonNumberSelected)).subscribe( resultado => {
      this.pokemonList = resultado.results;
      console.log(resultado);
    });
  }
}
