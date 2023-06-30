import PropTypes, { object } from "prop-types";
import PokemonCard from "./PokemonCard";
export default function Team({ pokemons, name }) {
  return (
    <section className="flex gap-4 p-4 bg-slate-900 w-fit">
      <div>
        <h2 className="col-span-2 text-xl font-semibold text-center text-slate-50">Pokedex</h2>
        <span className="text-slate-50">{name}</span>
      </div>

      {pokemons.map((pokemon, index) => {
        return <PokemonCard pokemon={pokemon} key={index} />;
      })}
    </section>
  );
}

Team.propTypes = {
  pokemons: PropTypes.arrayOf(object),
  name: PropTypes.string,
};
