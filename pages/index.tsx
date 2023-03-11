import { Layout } from "../components/layouts";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";
import pokemonApi from "../api/pokemonApi";
import { PokemonListResponse, SmallPokemon } from "../interfaces/pokemon-list";
import { PokemonCard } from "../components/pokemon";
import { PokemonCards } from "../components/pokemon/PokemonCards";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokedex">
      <PokemonCards pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonApi.get<PokemonListResponse>(
    "/pokemon?limit=649"
  );

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
