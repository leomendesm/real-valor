import styled from "styled-components"

const Select = styled.select`
	border-radius: 8px;
	width: 45%;
	padding: 8px 4px;
	border: 2px solid #094067;
	font-family: 'Baloo 2', cursive;
	font-weight: 600;
	color: #094067;
`

export const SelectFull = styled(Select)`
	width: 100%;
`
export default Select