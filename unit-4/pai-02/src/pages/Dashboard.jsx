import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonsQuery } from "../features/pokemon/pokemonReducer";
import Loader from "../components/Loader";
import ErrorBanner from "../components/ErrorBanner";
import { setFilter, setPage, setSort } from "../features/pokemon/pokemonSlice";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { filter, sort, page } = useSelector((state) => state.pokemon);
  const { data, error, isLoading } = useGetPokemonsQuery({
    offset: (page - 1) * 20,
    limit: 20,
  });
  if (isLoading) return <Loader />;
  if (error) return <ErrorBanner mess="Error Fetching Pokemons" />;

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
    dispatch(setPage(1));
  };
  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };
  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };
  const filteredPokemons = data.results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedPokemons = filteredPokemons.sort((a, b) =>
    sort === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }),
    [page];

  return (
    <div className="container mx-auto p-4">
      <div ref={topRef}></div>
      <Filters
        filter={filter}
        sort={sort}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedPokemons.map((pokemon) => {
          const id = pokemon.url.split("/").slice(-2, -1)[0];
          return (
            <Link to={`/details/${id}`} key={pokemon.name}>
              <div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={pokemon.name}
                  className="w-full h-32 object-contain"
                />
                <h3 className="text-center text-lg font-semibold">
                  {pokemon.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination
        currentPage={page}
        onPageChange={handlePageChange}
        totalItems={data.count}
      />
    </div>
  );
};

export default Dashboard;
