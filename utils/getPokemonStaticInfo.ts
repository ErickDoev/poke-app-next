import { pokeApi } from "@/api";
import { PokemonDetailsResp } from "@/interfaces";

const getPokemonStaticInfo = async (params: string) => {
 
    const {data} = await pokeApi.get<PokemonDetailsResp>(`/pokemon/${params}`);

    return {
        name: data.name,
        weight: data.weight,
        height: data.height,
        stats: data.stats,
        sprites: data.sprites,
        id: data.id
    }
}

export default getPokemonStaticInfo;
