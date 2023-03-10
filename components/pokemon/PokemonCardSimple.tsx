import { Sprites } from "../../interfaces";
import { Grid, Card } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  name: string;
  sprites: Sprites;
}

export const PokemonCardSimple: FC<Props> = ({ sprites, name }) => {
  return (
    <>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ padding: "30px" }}>
          <Card.Body>
            <Card.Image
              src={sprites.other?.dream_world.front_default || "/no-image.png"}
              alt={name}
              width="100%"
              height={150}
            />
          </Card.Body>
        </Card>
      </Grid>
    </>
  );
};
