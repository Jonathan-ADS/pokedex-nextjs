import { FC, useState, useEffect } from "react";
import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import { Sprites } from "../../interfaces";
import { localFavorites } from "../../utils";
import confetti from "canvas-confetti";

interface Props {
  name: string;
  id: number;
  sprites: Sprites;
}

export const PokemonCardInfo: FC<Props> = ({ sprites, name, id }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(localFavorites.isFavorite(id));
  }, [id]);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 150,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <>
      <Grid xs={12} sm={8}>
        <Card isHoverable>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text h1 transform="capitalize">
              {name}
            </Text>
            <Button
              color="gradient"
              bordered={isInFavorites}
              onPress={onToggleFavorite}
              shadow
              rounded
            >
              {!isInFavorites ? "Agregar a Favoritos" : "Eliminar de Favoritos"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={25}>Sprites:</Text>
            <Container
              direction="row"
              display="flex"
              justify="space-between"
              gap={0}
            >
              <Image
                src={sprites.front_default}
                alt={name}
                width={80}
                height={80}
              />
              <Image
                src={sprites.back_default}
                alt={name}
                width={80}
                height={80}
              />
              <Image
                src={sprites.front_shiny}
                alt={name}
                width={80}
                height={80}
              />
              <Image
                src={sprites.back_shiny}
                alt={name}
                width={80}
                height={80}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </>
  );
};
