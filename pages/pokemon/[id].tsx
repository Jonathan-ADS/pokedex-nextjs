import { Layout } from "@component/components/layouts";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { pokemonApi } from "@component/api";
import { Pokemon } from "../../interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCardSimple, PokemonCardInfo } from "../../components/pokemon";
import { getPokemonInfo } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id);

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
    revalidate: 86400,
  };
};

export default PokemonPage;
