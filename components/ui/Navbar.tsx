import { Spacer, Text, useTheme, Image } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          padding: "0 20px",
          backgroundColor: theme?.colors.gray50.value,
        }}
      >
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg"
          alt="Incono de la App"
          width={50}
          height={50}
          style={{
            padding: "0 0 13px 0",
          }}
        />

        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okedex Jonathan
        </Text>

        <Spacer css={{ flex: 1 }} />

        <Text color="white" h4>
          Favoritos
        </Text>
      </div>
    </>
  );
};
