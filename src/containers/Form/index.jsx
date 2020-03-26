import React from 'react'
import styled from 'styled-components'
import { FormGroup, InputGroup, Input, Select } from "../../components/Form"

const FormComponent = () => (
	<Form action="">
		<FormGroup>
			<label htmlFor="date">Período:</label>
			<InputGroup>
				<Select id="date">
					<option value="1">1 ano</option>
					<option value="2">2 anos</option>
					<option value="3">data específica</option>
				</Select>
				<Input type="date"/>
			</InputGroup>
		</FormGroup>
		<FormGroup>
			<label htmlFor="date">Valor:</label>
			<InputGroup>
				<Select id="date">
					<option value="1">R$ 2000</option>
					<option value="2">R$ 10000</option>
					<option value="3">valor específico</option>
				</Select>
				<Input type="number" placeholder="Ex: R$ 1000" />
			</InputGroup>
		</FormGroup>
	</Form>
)

const Form = styled.form`
	padding: 20px;
	background: #fffffe;
	margin: 0 10px;
	color: #094067;
	border-radius: 4px;
	border: 3px solid #094067;
	label {
		font-weight: bold;
	}
`









export default FormComponent