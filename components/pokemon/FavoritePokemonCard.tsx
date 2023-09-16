import { Card, Image, CardBody } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
    pokemon: number
}

export const FavoritePokemonCard: FC<Props> = ({pokemon}) => {

    const router = useRouter();
    console.log(router);
    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemon}`);
    }
    
  return (
    <Card className="p-2" isPressable onPress={onFavoriteClicked}>
          <CardBody>
            <Image 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
              width={'100%'}
              height={140}
              />
          </CardBody>
    </Card>
  )
}
