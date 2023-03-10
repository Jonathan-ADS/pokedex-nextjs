import { useState, useEffect } from "react";

import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";

import { NoFavorites } from "../../components/ui";
import { Layout } from "../../components/layouts";
import { localFavorites } from "../../utils";
import { FavoritesPokemons } from "../../components/pokemon";

const Favorites = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Favorites">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
