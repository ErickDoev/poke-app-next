import { useEffect, useState } from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";

import confetti from 'canvas-confetti';
import { PokemonDetailsResp } from "@/interfaces";
import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { getPokemonStaticInfo, localFavorites } from "@/utils";

interface Props {
    pokemon: PokemonDetailsResp
}

const PokemonInfoPage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setIsInfavorites] = useState(false);

    const { name, sprites} = pokemon;

    const onToogleFavorite = () => {
      localFavorites.toogleFavorite(pokemon.id);
      setIsInfavorites(!isInFavorites);
      if(!isInFavorites){
        confetti({
          zIndex: 999,
          particleCount: 100,
          spread: 160,
          angle: -100,
          origin:{
            x: 1,
            y: 0
          }
        })
      }
    }

  useEffect(() => {
    setIsInfavorites(localFavorites.existInFavorites(pokemon.id));
  }, []);
    
  return (
    <Layout>
      <div className="flex flex-row gap-5">
        <Card className="cursor-pointer">
          <CardBody>
              <Image 
                src={sprites?.other?.dream_world?.front_default}
                width={150}
                height={140}/>
          </CardBody>
      </Card>
      <Card className="cursor-pointer flex-1">
          <CardHeader className="flex flex-row justify-between">
            <p className="capitalize">{name}</p>    
            <Button variant="bordered" color="secondary" onClick={onToogleFavorite}>
              <span>{!isInFavorites ? 'Guardar en favoritos' : 'Eliminar de favoritos'}</span>
            </Button>
          </CardHeader>
          <div>
          <CardBody className="flex flex-row justify-center">
              <Image 
                src={pokemon.sprites.front_default}
                width={100}
                height={100}/>
              <Image 
                src={pokemon.sprites.back_default}
                width={100}
                height={100}/>
              <Image 
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}/>
              <Image 
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}/>
          </CardBody>
          </div>
      </Card>
      </div>
    </Layout>
  )
}

// esto se ejecuta del lado del servidor
export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id:string };

    return {
      props: {
        pokemon: await getPokemonStaticInfo(id)
      }
    }
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
// esto se ejecuta del lado del servidor
export const getStaticPaths: GetStaticPaths = (async (ctx) => {
    
    const pokemonsFull = [...Array(151)].map((value, index) => `${index+1}`);

    return {
        paths: pokemonsFull.map((id) => ({
            params: {
                id
            }
        })),
        fallback: false
    }
}) satisfies GetStaticPaths;
  
export default PokemonInfoPage;