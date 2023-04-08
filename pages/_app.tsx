import type { AppProps } from "next/app"
import Head from "next/head"

import "../styles/global.scss"

export default function App({ Component, pageProps }: AppProps){
	return (
		<>
			<Head>
					<meta charSet="utf-8" />
					<meta name="author" content="Kayo Souza" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0" />
					<meta property="og:author" content="Kayo Souza" />
					<meta property="og:type" content="website" />
					<meta property="og:locale" content="pt_BR" />
					<meta property="og:site_name" content="Abadar" />
					<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
					<meta name="application-name" content="Kayo Souza" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-title" content="Kayo Souza" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="msapplication-TileColor" content="#050000" />
					<meta name="msapplication-config" content="/browserconfig.xml" />
					<meta name="theme-color" content="#050000" />
					<meta name="color-scheme" content="dark" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" as="style" />
				</Head>
				<Component {...pageProps} />
		</>
	)
}
