import { Layout } from "@/components/layouts";
import { useEffect, useState } from "react";
import { localFavorites } from '@/utils';
import { FavoritePokemonsList } from "@/components/pokemon/FavoritePokemonsList";
import { Image } from "@nextui-org/react";

const FavoritesPage = () => {

  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    console.log('favorites effect');
    
    setFavorites(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      <div className="flex flex-col items-center justify-center gap-5">
        {
          favorites.length === 0
          ? <>
              <h1>No hay favoritos</h1>
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                width={150}
                height={150}/>
            </>
          : <FavoritePokemonsList favorites={favorites} />
        }
      </div>
    </Layout>
  )
}

export default FavoritesPage;