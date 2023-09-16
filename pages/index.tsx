import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonListResp, SmallPokemon } from "@/interfaces";
import { GetStaticProps, NextPage } from 'next';
import { PokeCard } from "@/components/pokemon/PokeCard";
interface Props {
  pokemons: SmallPokemon[]
}


const HomePage: NextPage<Props> = ({pokemons}) => {
  
  return (
    <Layout title="Pokemon">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          pokemons.map((pokemon) => (
            <PokeCard 
              key={pokemon.id}
              id={pokemon.id} 
              name={pokemon.name}
              url={pokemon.url}
              img={pokemon.img}/>
          ))
        }
      </div>
    </Layout>
  )
}


// esto se ejecuta del lado del servidor
export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResp>('/pokemon?limit=151');

  const pokemons = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: (i + 1).toString(),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))
  
  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage;
