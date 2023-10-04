import { searchPokemonById } from "./funciones";
import { IPokemon } from "./interfaces/IPokemon";
import { httpClient } from "./plugins";

httpClient.get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error en la solicitud");
  }
  const data = await response.json() as T;
  return data;
};

(async () => {
  const pokemon: IPokemon = await searchPokemonById("80");
  console.log(pokemon.abilities[1].ability.name);
})();