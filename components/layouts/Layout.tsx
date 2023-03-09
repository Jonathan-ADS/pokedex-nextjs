import { FC, PropsWithChildren } from "react";

import Head from "next/head";
import { Navbar } from "../ui";

interface Props extends PropsWithChildren {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon APP"}</title>
        <meta name="author" content="Jonathan Hernandez" />
        <meta
          name="description"
          content={`Informacion sobre el Pokemon ${title}`}
        />
        <meta name="keyword" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
