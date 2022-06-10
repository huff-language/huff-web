import React from 'react'
import LinkNav from '@components/nav'
import { Wrapper, Container, Logo, LogoContainer } from './styled'
import { Badge } from 'react-bootstrap'

export const Main: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<h1>
					<LogoContainer>
						<Logo />
					</LogoContainer>
					<span className='mono-font'>
						Huff
						<p>
							<Badge bg='secondary'>curl -L https://get.huff.sh | bash</Badge>
							<br />A low level assembly language for the EVM.
						</p>
					</span>
				</h1>
				<LinkNav />
			</Container>
		</Wrapper>
	)
}
