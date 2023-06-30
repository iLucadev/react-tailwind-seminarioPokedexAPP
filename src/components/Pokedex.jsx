import PropTypes, { object } from "prop-types";
import PokemonCard from "./PokemonCard";

export default function Pokedex({ pokemons }) {
  return (
    <section className="grid grid-cols-2 gap-4 p-4 bg-slate-900 w-fit">
      <h2 className="col-span-2 text-xl font-semibold text-center text-slate-50">Pokedex</h2>
      {pokemons.map((pokemon, index) => {
        return <PokemonCard pokemon={pokemon} key={index} />;
      })}
    </section>
  );
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(object),
};
