
import { FC } from "react"
import Head from "next/head"
import { AppNavbar } from "@/components/ui"

interface LayoutProps {
    children: any,
    title?: string
}

export const Layout: FC<LayoutProps> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Erick Cruz"/>
            <meta name="description" content="Informacion sobre pokemon XXXX"/>
            <meta name="keywords" content="XXXX. pokemon, pokedex"/>

        </Head>
        <AppNavbar />
        <main style={{
            padding: '0 20px'
        }}>
            { children }
        </main>

    </>
  )
}
