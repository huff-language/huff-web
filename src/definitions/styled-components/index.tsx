export * from './common'

import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { common } from '@definitions/styled-components/common'

export const StyledThemeProvider: React.FC = ({ children }) => {
	return (
		<>
			<ThemeProvider theme={common as DefaultTheme}>{children as any}</ThemeProvider>
		</>
	)
}
