import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Image } from "@nextui-org/react";
import Link from "next/link";

export const AppNavbar = () => {
  
  return (
    <>
      <div>
        <Navbar>
          <NavbarBrand>
          <Image width={70} alt="logo" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"/>
          <Link href="/" passHref className="font-bold text-inherit">
            Pokemon list
          </Link>
          </NavbarBrand>
          <NavbarContent className="flex gap-4" justify="center">
            <NavbarItem>
              <Link href='/'>
                  home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href='/favorites'>
                    Favorites
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  )
}
