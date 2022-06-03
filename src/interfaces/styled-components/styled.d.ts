// #region Global Imports
import 'styled-components'
// #endregion Global Imports

type Colors = 'bgShade0' | 'bgShade1' | 'bgShade2' | 'accent0' | 'accent1' | 'text' | 'textMuted'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: Record<Colors, string>
	}
}
