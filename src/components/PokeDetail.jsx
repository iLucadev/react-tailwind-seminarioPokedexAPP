import PropTypes from "prop-types";

export default function PokeDetail({ pokemon }) {
  console.log(pokemon);
  return (
    <div className="p-4 bg-slate-900 h-max">
      <h3 className="text-xl font-semibold text-slate-50">{pokemon.name}</h3>
      <div className="flex gap-8">
        <div className="flex flex-col justify-between">
          <span className="text-sm text-slate-50">front & back</span>
          <img src={pokemon.sprites.front_default} alt="" />;
          <img src={pokemon.sprites.back_default} alt="" />;
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-50">
          <span className="font-semibold">stats</span>
          {pokemon.stats.map((el, index) => {
            return <span key={index}>{`${el.stat.name}: ${el.base_stat}`}</span>;
          })}
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-50">
          <span className="font-semibold">abilities</span>
          {pokemon.abilities.map((el, index) => {
            return <span key={index}>{`${el.ability.name}`}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

PokeDetail.propTypes = {
  pokemon: PropTypes.object,
};
