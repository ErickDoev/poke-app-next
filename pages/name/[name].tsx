import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonDetailsResp, PokemonListResp } from "@/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { FC, useEffect, useState } from "react";
import { getPokemonStaticInfo, localFavorites } from "@/utils";
import confetti from 'canvas-confetti';

interface Props {
    pokemon: PokemonDetailsResp
}

export const PokemonByNamePage: FC<any> = ({pokemon}) => {
    const [isInFavorites, setIsInfavorites] = useState(false);
    
    const { name, sprites, id } = pokemon;
  
    const onToogleFavorite = () => {
      localFavorites.toogleFavorite(id);
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
    setIsInfavorites(localFavorites.existInFavorites(id));
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
                src={sprites.front_default}
                width={100}
                height={100}/>
              <Image 
                src={sprites.back_default}
                width={100}
                height={100}/>
              <Image 
                src={sprites.front_shiny}
                width={100}
                height={100}/>
              <Image 
                src={sprites.back_shiny}
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

    const { name } = params as { name: string };

    return {
      props: {
        pokemon: await getPokemonStaticInfo(name)
      }
    }
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
// esto se ejecuta del lado del servidor
export const getStaticPaths: GetStaticPaths = (async (ctx) => {
    
    const { data } = await pokeApi.get<PokemonListResp>('/pokemon?limit=151');
    const pokemons = data.results;

    return {
        paths: pokemons.map(({name}) => ({
            params: {
                name
            }
        })),
        fallback: false
    }
}) satisfies GetStaticPaths;
  
export default PokemonByNamePage;