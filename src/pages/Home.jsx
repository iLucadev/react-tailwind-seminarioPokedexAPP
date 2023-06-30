import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Team from "../components/Team";
import Pokedex from "../components/Pokedex";
import PokeDetail from "../components/PokeDetail";
import { useEffect, useState } from "react";
import { getPokemonByName } from "../helpers/crud";

export default function Home() {
  const user = useSelector((state) => state.authData.user);
  const [pokedexData, setPokedexData] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokedexData = async () => {
      try {
        const promises = user.pokedex.map(async (pokemonName) => {
          const response = await getPokemonByName(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
          return response.data;
        });

        const pokedexData = await Promise.all(promises);
        setPokedexData(pokedexData);
        setSelectedPokemon(pokedexData[0]);
      } catch (error) {
        console.error("Error al obtener los datos de la Pokédex:", error);
      }
    };

    if (user) {
      fetchPokedexData();
    }
  }, [user, dispatch]);

  if (!user || !pokedexData) {
    return <Loading />;
  }

  console.log(user.poketeam);

  const pokeTeam = pokedexData.filter((pokemon) => user.poketeam.pokemon.includes(pokemon.name));
  console.log(pokeTeam);

  return (
    <div className="container flex justify-center gap-12 mx-auto xl:max-w-6xl grow">
      <Pokedex pokemons={pokedexData} />
      <div className="flex flex-col gap-8">
        <Team pokemons={pokeTeam} name={user.poketeam.name} />
        <PokeDetail pokemon={selectedPokemon} />
      </div>
    </div>
  );
}
