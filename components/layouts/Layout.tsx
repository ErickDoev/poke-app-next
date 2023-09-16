
import { FC } from "react"
import Head from "next/head"
import { AppNavbar } from "@/components/ui"

interface LayoutProps {
    children: any,
    title?: string
}

const origin = (typeof window) === 'undefined' ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Erick Cruz"/>
            <meta name="description" content={`Informacion sobre pokemon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
            
            <meta property="og:title" content={`Informacion sobre ${title}`}/>
            <meta property="og:description" content={`Esta es la página sobre ${title}`}/>
            <meta property="og:image" content={`${origin}/images/banner.png`}/>

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
