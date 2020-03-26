import React from 'react'
import styled from 'styled-components'
const HeaderComponent = () => (
    <Header>
		<h1>Calculadora de investimentos</h1>
		<p>Simule um investimento em moedas virtuais como bitcoin e compare ao tesouro direto.</p>
	</Header>
)

const Header = styled.header`
	padding: 20px;
	color: #094067;
	h1 {
		font-size: 1.5em;
	}
`

export default HeaderComponent