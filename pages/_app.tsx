import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider>
      <NextThemesProvider themes={['dark-purple', 'dark', 'light']} attribute="class" defaultTheme="dark">
        <main className='dark text-foreground bg-background'>
          <Component {...pageProps} />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
