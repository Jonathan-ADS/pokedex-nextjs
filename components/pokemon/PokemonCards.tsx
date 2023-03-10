import { Grid } from "@nextui-org/react";
import { PokemonCard } from "./PokemonCard";
import { SmallPokemon } from "../../interfaces";
import { FC } from "react";

interface Props {
  pokemons: SmallPokemon[];
}

export const PokemonCards: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((poke) => (
        <PokemonCard key={poke.id} pokemon={poke} />
      ))}
    </Grid.Container>
  );
};
