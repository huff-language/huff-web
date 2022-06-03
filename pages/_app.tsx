import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { StyledThemeProvider } from '@definitions/styled-components'
import GlobalStyle from '@styles/globalStyles'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab)

function NextApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<StyledThemeProvider>
			<Head>
				<link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet' />
				<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
				<link rel='shortcut icon' href='/huff_dark.png' />
				<title>Huff Language</title>
			</Head>
			<GlobalStyle />

			<Component {...pageProps} />
		</StyledThemeProvider>
	)
}

export default NextApp
