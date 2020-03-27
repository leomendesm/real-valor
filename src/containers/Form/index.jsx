import React from 'react'
import styled from 'styled-components'
import { FormGroup, InputGroup, Input, Select, SelectFull } from "../../components/Form"
import { connect } from "react-redux"
import updateFormDispatch from "../../redux-flow/reducers/form/action-creators"

const FormComponent = ({form, updateForm}) => (
	<Form action="">
		<FormGroup>
			<label htmlFor="investment">Investimento:</label>
			<InputGroup>
				<SelectFull id="investment" onChange={e => updateForm(e, 'investmentType')}>
					<option value="0">Selecionar</option>
					<option value="bitcoin">Bitcoin</option>
					<option value="tesouro">Tesouro Direto</option>
				</SelectFull>
			</InputGroup>
		</FormGroup>
		<FormGroup>
			<label htmlFor="date">Período:</label>
			<InputGroup>
				<Select id="date" onChange={e => updateForm(e, 'dateType')}>
					<option value="0">Selecionar</option>
					<option value="1">1 ano</option>
					<option value="2">2 anos</option>
					<option value="3">data específica</option>
				</Select>
				{form.dateType === '3' &&
					<Input type="date" onChange={e => updateForm(e, 'date')}/>
				}
			</InputGroup>
		</FormGroup>
		<FormGroup>
			<label htmlFor="amount">Valor:</label>
			<InputGroup>
				<Select id="amount" onChange={e => updateForm(e, 'amountType')}>
					<option value="0">Selecionar</option>
					<option value="1">R$ 2000</option>
					<option value="2">R$ 10000</option>
					<option value="3">valor específico</option>
				</Select>
				{form.amountType === '3' &&
					<Input type="number" placeholder="Ex: R$ 1000" onChange={e => updateForm(e, 'amount')} />
				}
			</InputGroup>
		</FormGroup>
	</Form>
)

const Form = styled.form`
	padding: 20px;
	background: #fffffe;
	color: #094067;
	border-radius: 4px;
	border: 3px solid #094067;
	label {
		font-weight: bold;
	}
	margin: 0 10px 20px;
`

const mapStateToProps = state => ({
	form: state.form
})
const mapDispatchToProps = dispatch => ({
	updateForm: (e, field) => updateFormDispatch({field, value: e.target.value}, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)