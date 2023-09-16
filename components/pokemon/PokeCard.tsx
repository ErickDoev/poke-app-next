import { NextPage } from "next";
import { useRouter } from "next/router";
import { SmallPokemon } from "@/interfaces";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export const PokeCard: NextPage<SmallPokemon> = ({id, name, img}) => {

  const router = useRouter();
  
  const onClick = () => {
    router.push(`/name/${name}`)
  }

  return (
        <Card key={id} className="cursor-pointer" isPressable shadow="sm" onPress={onClick}>
          <div>
            <CardHeader className="justify-between">
                <p className="capitalize">{name}</p>
                <p># {id.padStart(3,'0')}</p>
              </CardHeader>
            <CardBody>
                <Image 
                  src={img}
                  alt="img"
                  width='100%'
                  height={140}/>
            </CardBody>
          </div>
        </Card>
  )
}
