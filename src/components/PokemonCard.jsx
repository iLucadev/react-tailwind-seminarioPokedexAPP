import PropTypes from "prop-types";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="flex flex-col w-32 p-2">
      <img src={pokemon.sprites.front_default} alt="" />
      <h4 className="font-semibold text-center text-slate-50">{pokemon.name}</h4>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};
