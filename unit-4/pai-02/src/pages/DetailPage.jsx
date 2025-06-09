import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../features/pokemon/pokemonReducer";
import Loader from "../components/Loader";
import ErrorBanner from "../components/ErrorBanner";

const DetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPokemonByIdQuery(id);

  if (isLoading) return <Loader />;
  if (error) return <ErrorBanner mess="Error Fetching Pokemon" />;
  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500">
        Back to Dashboard
      </Link>
      <div>
        <img
          src={data.sprites.front_default}
          alt={data.name}
          className="w-48 h-48 object-contain"
        />
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
        <p>Base Experience: {data.base_experience}</p>
        <div>
          <h3 className="font-semibold">Types:</h3>
          <ul>
            {data.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Abilities:</h3>
        <ul>
          {data.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailPage;
