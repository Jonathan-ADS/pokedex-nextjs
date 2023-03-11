import { Layout } from "@component/components/layouts";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { pokemonApi } from "@component/api";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCardSimple, PokemonCardInfo } from "../../components/pokemon";
import { getPokemonInfo } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const { id, name, sprites } = pokemon;

  return (
    <Layout title={`${name} #${id}`}>
      <Grid.Container css={{ margin: "5px" }} gap={2}>
        <PokemonCardSimple sprites={sprites} name={name} />
        <PokemonCardInfo sprites={sprites} name={name} id={id} />
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokemonApi.get<PokemonListResponse>(
    `pokemon?limit=151`
  );
  const pokemonsNames: string[] = data.results.map((pokemon) => pokemon.name);
  return {
    paths: pokemonsNames.map((name) => ({
      params: { name },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByNamePage;
