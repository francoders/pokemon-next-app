import Head from "next/head";
import {FC} from 'react'

interface Props {
    title?: string;
}

export const Layout: FC <Props> = ({children, title}) => {
  return (
    <>
      <Head>
          <title>{title || 'PokemonApp'}</title>
          <meta name="author" content="Francisco Corvalan"></meta>
          <meta name="description" content="informacion sobre el pokemon"></meta>
          <meta name="keywords" content="pokemon, pokedex"></meta>
      </Head>

      {/*Navbar*/}

      <main>
          {children}
      </main>






 
    </>
  );
};
