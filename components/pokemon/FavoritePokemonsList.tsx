
import { Card, Image, CardBody } from "@nextui-org/react";
import { FC } from "react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

interface Props{
    favorites: number[]
}

export const FavoritePokemonsList: FC<Props> = ({ favorites }) => {
  return (
    <div className="flex flex-row gap-5 justify-items-start">
    {
      favorites.map((pokemon:number) => (
        <FavoritePokemonCard key={pokemon} pokemon={pokemon}/>
      ))
    }
  </div>
  )
}
