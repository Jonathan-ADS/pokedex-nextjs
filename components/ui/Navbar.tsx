import { Spacer, Text, useTheme, Image, Link } from "@nextui-org/react";
import NextLink from "next/link";

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
        {/* <NextLink href="/" passHref legacyBehavior>
          <Link>
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
          </Link>
        </NextLink> */}

        <Link href="/" as={NextLink}>
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
        </Link>

        <Spacer css={{ flex: 1 }} />
        <Link href="/favorites" as={NextLink}>
          <Text color="white" h4>
            Favoritos
          </Text>
        </Link>
      </div>
    </>
  );
};
