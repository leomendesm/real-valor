import { UPDATE_FORM } from "./actions"
import moment from "moment"

const updateForm = ({field, value}, dispatch) => {
	if(field === 'date') {
		const date = moment(value)
		const limit = moment().diff(date, 'days')
		value = date.format('X')
		dispatch({type: UPDATE_FORM, payload: {field: 'limit', value: limit}})
	}
	if(field === 'dateType' && (value === '2' || value === '1')){
		if(value === '1') {
			dispatch({type: UPDATE_FORM, payload: {field: 'date', value: moment().subtract(1, 'years').format('X')}})
			dispatch({type: UPDATE_FORM, payload: {field: 'limit', value: 364}})
		}
		if(value === '2') {
			dispatch({type: UPDATE_FORM, payload: {field: 'date', value: moment().subtract(2, 'years').format('X')}})
			dispatch({type: UPDATE_FORM, payload: {field: 'limit', value: 729}})
		}
	}

	if(field === 'amountType' && (value === '2' || value === '1')){
		if(value === '1')
			dispatch({type: UPDATE_FORM, payload: {field: 'amount', value: 2000}})
		if(value === '2')
			dispatch({type: UPDATE_FORM, payload: {field: 'amount', value: 10000}})
	}
	dispatch({type: UPDATE_FORM, payload: {field, value}})
}

export default updateForm
