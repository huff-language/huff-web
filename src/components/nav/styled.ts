import styled from 'styled-components'
import { Nav } from 'react-bootstrap'

export const LinkNavObj = styled(Nav).attrs({
	className: 'justify-content-center',
})`
	.nav-item {
		svg {
			width: 36px;
			height: 36px;
		}
	}
`
