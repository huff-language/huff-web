import React from 'react'
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { LinkNavObj } from './styled'

//--------------
// TYPES & PROPS
//--------------
type NavItem = {
	link: string
	icon: IconProp
	tooltip: string
}

type NavItems = NavItem[]

//--------------
// COMPONENT
//--------------
const LinkNav: React.FC = () => {
	const NAV_ITEMS: NavItems = [
		{
			link: 'https://github.com/huff-language/',
			icon: ['fab', 'github'],
			tooltip: 'GitHub',
		},
		{
			link: 'https://twitter.com/huff_language/',
			icon: ['fab', 'twitter'],
			tooltip: 'Twitter',
		},
		{
<<<<<<< HEAD
			link: 'http://localhost:8080/get-started/overview/',
=======
			link: 'http://docs.huff.sh/get-started/',
>>>>>>> e9d18089dd85adf24fdf5c169a74fe5c2000adb7
			icon: 'book',
			tooltip: 'Documentation & Specification',
		},
	]

	return (
		<LinkNavObj>
			{NAV_ITEMS.map(item => (
				<Nav.Item key={item.link}>
					<OverlayTrigger overlay={<Tooltip>{item.tooltip}</Tooltip>} placement='bottom'>
						<Nav.Link href={item.link}>
							<FontAwesomeIcon icon={item.icon} />
						</Nav.Link>
					</OverlayTrigger>
				</Nav.Item>
			))}
		</LinkNavObj>
	)
}

export default LinkNav
