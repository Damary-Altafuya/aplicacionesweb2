import { IPokemon } from "../interfaces/IPokemon";
import { httpClient } from "../plugins";


export const searchPokemonById = async (id: string): Promise<IPokemon> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemonFound = await httpClient.get<IPokemon>(url);
  return pokemonFound;
};