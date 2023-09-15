import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`

export const Container = styled.div`
	text-align: center;

	h1 {
		font-size: 5.5rem;
		font-weight: 300;
		line-height: 5rem;
		padding-bottom: 0.75rem;
	}

	p {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 300;
	}
`

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
`

export const Logo = styled.div`
	position: relative;
	height: 256px;
	width: 256px;
	outline: 0;
	overflow: hidden;

	::before {
		content: url(/huff.png);
		transform: scale(0.15);
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	::after {
		content: '';
		position: absolute;
		bottom: 15%; /* Align square directly below the logo */
		left: -50%; /* Center square */
		height: 200%;
		width: 200%;
		background: ${props => props.theme.colors.bgShade0};
		border-radius: 40%; /* Smooth edges to appear like liquid */
		animation: liquid 3.5s ease-in-out forwards; /* Set to forwards to freeze on last frame */
	}

	@keyframes liquid {
		0% {
			transform: translateY(0) rotate(0deg);
		}
		100% {
			transform: translateY(-100%) rotate(400deg);
		}
	}
`

export const MutedText = styled.span`
	color: ${props => props.theme.colors.textMuted};
`
