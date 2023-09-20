import React, { useState } from 'react'
import LinkNav from '@components/nav'
import { Wrapper, Container, Logo, LogoContainer, BigButton } from './styled'
import { Badge } from 'react-bootstrap'
import { BsClipboard, BsClipboardCheck, BsLink45Deg } from 'react-icons/bs';


export const Main: React.FC = () => {
	const [checked, setChecked] = useState(false);

	return (
		<Wrapper>
			<Container>
				<h1>
					<LogoContainer>
						<Logo />
					</LogoContainer>
					<span className='mono-font'>
						<h1 style={{
							paddingBottom: '20px',
							textDecoration: "underline",
							textDecorationColor: "#4242c7",
							textDecorationThickness: "5px"
						}}>
							Huff
						</h1>
						<div>
							<p style={{ lineHeight: "3em" }}>
								<Badge bg='secondary' style={{ lineHeight: "20px", cursor: "pointer" }} onClick={() => {
									navigator.clipboard.writeText("curl -L get.huff.sh | bash");
									setChecked(true);
									setTimeout(() => setChecked(false), 800);
								}}>
									<span style={{ lineHeight: "20px", verticalAlign: "middle" }}>curl -L get.huff.sh | bash</span>
									<span style={{ paddingLeft: "8px" }}>{checked ? (<BsClipboardCheck />) : (<BsClipboard />)}</span>
								</Badge>
							</p>
							<div style={{ height: "6px" }}> &nbsp; </div>
							<p style={{ lineHeight: "2em", paddingBottom: "20px" }}>
								A{" "}
								<span style={{
									textDecoration: "underline",
									textDecorationColor: "#4242c7",
									textDecorationThickness: "3px"
								}}>
									low level
								</span>{" "}
								assembly language for the EVM.
							</p>
						</div>
					</span>
				</h1>
				<BigButton href="/hackathon">
					<span>Join the first Huffathon, starting on September 28th!</span>
					<BsLink45Deg />
				</BigButton>
				<LinkNav />
			</Container>
		</Wrapper>
	)
}
